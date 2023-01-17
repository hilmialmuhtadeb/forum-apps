import React from 'react';
import PropTypes from 'prop-types';
import ThreadCard from './ThreadCard';

function ThreadWrapper({ threads }) {
  return (
    <div className="threads-wrapper">
      {threads.map((thread) => (
        <ThreadCard key={thread.id} thread={thread} />
      ))}
    </div>
  );
}

ThreadWrapper.propTypes = {
  threads: PropTypes.array.isRequired,
};

export default ThreadWrapper;
