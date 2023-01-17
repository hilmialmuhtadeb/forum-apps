import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';
import CommentInputBox from '../component/CommentInputBox';
import CommentsList from '../component/CommentsList';
import { getDetailThread } from '../features/thread/threadAPI';
import { formatDate } from '../utils/general';
import { activeThreadSelector } from '../features/thread/threadSlice';

function Detail() {
  const { id } = useParams();
  const thread = useSelector(activeThreadSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    async function initGetDetailThread() {
      const { data } = await getDetailThread(id);
      dispatch({ type: 'thread/setActiveThread', payload: data.detailThread });
    }

    initGetDetailThread();

    return () => dispatch({ type: 'thread/setActiveThread', payload: null });
  }, [id]);

  if (!thread) {
    return (
      <div className="thread-wrapper">
        <p className="loading-state">Loading...</p>
      </div>
    );
  }

  return (
    <div className="thread-wrapper">
      <h1 className="thread__title">{thread.title}</h1>
      <p className="thread__body">{parse(thread.body)}</p>
      <div className="thread-author">
        <img src={thread.owner.avatar} alt="avatar" className="thread-author__avatar" />
        <p className="thread-author__name">{thread.owner.name}</p>
        &middot;
        <p className="thread-author__date">{formatDate(thread.createdAt)}</p>
      </div>
      <div className="comments">
        <h2 className="comments__title">
          Komentar
          {` (${thread.comments.length})`}
        </h2>
        <CommentInputBox id={id} />
        <CommentsList comments={thread.comments} />
      </div>
    </div>
  );
}

export default Detail;
