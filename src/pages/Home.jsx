import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadWrapper from '../component/ThreadWrapper';
import { getAllThreads } from '../features/thread/threadAPI';
import { threadSelector } from '../features/thread/threadSlice';

function Home() {
  const dispatch = useDispatch();
  const threads = useSelector(threadSelector);

  useEffect(() => {
    async function initGetAllThreads() {
      const { data } = await getAllThreads();
      dispatch({ type: 'thread/setThreads', payload: data.threads });
    }

    if (threads.length === 0) {
      initGetAllThreads();
    }
  }, []);

  return (
    <div className="threads-page">
      <h1>Semua Thread</h1>
      { threads.length > 0 ? (
        <ThreadWrapper threads={threads} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Home;
