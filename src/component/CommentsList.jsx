import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { formatDate } from '../utils/general';

function CommentsList({ comments }) {
  return (
    <div className="comments__list">
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <div className="comment-author">
            <img src={comment.owner.avatar} alt="avatar" className="comment-author__avatar" />
            <p className="comment-author__name">{comment.owner.name}</p>
            &middot;
            <p className="comment-author__date">{formatDate(comment.createdAt)}</p>
          </div>
          <div className="comment__body">
            <p>{parse(comment.content)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentsList;
