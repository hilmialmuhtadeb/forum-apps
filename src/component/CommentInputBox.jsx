import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { authUser } from '../features/auth/authSlice';
import { addCommentToThread } from '../features/thread/threadAPI';
import { useInput } from '../utils/hooks';
import { activeThreadSelector } from '../features/thread/threadSlice';

function CommentInputBox({ id }) {
  const user = useSelector(authUser);
  const [comment, onCommentChange] = useInput('');
  const thread = useSelector(activeThreadSelector);
  const dispatch = useDispatch();

  function addNewCommentToList(newComment) {
    const newThread = {
      ...thread,
      comments: [
        ...thread.comments,
        newComment,
      ],
    };
    dispatch({ type: 'thread/setActiveThread', payload: newThread });
  }

  async function addCommentHandler(e) {
    e.preventDefault();
    const { data } = await addCommentToThread({ id, comment });

    if (data.status === 'success') {
      addNewCommentToList(data.comment);
    }
  }

  if (!user) {
    return (
      <p className="not-login">
        <Link to="/login">Login</Link>
        <span> terlebih dahulu untuk memberi komentar.</span>
      </p>
    );
  }

  return (
    <div className="comment-input-box">
      <input type="text" id="comment" value={comment} onChange={onCommentChange} placeholder="Tulis komentar" />
      <button type="submit" onClick={addCommentHandler}>Kirim</button>
    </div>
  );
}

CommentInputBox.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CommentInputBox;
