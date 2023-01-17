import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { allUsers } from '../features/auth/authSlice';
import { formatDate } from '../utils/general';

function ThreadCard({ thread }) {
  const users = useSelector(allUsers);

  function showThreadAuthor(id) {
    const author = users.find((user) => user.id === id);
    return author ? author.name : 'Unknown';
  }

  return (
    <div className="thread-card">
      <div className="thread-card__title">
        <Link to={`/detail/${thread.id}`}>
          <h2>{thread.title}</h2>
        </Link>
      </div>
      <div className="thread-card__body">
        {parse(thread.body)}
      </div>
      <div className="thread-card__footer">
        <span className="author">{showThreadAuthor(thread.ownerId)}</span>
        &middot;
        <span>{formatDate(thread.createdAt)}</span>
      </div>
    </div>
  );
}

ThreadCard.propTypes = {
  thread: PropTypes.object.isRequired,
};

export default ThreadCard;
