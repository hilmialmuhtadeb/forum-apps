import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ThreadWrapper from '../component/ThreadWrapper';
import { authUser } from '../features/auth/authSlice';
import { fetchAllThreads } from '../features/thread/threadThunk';
import { threadSelector } from '../features/thread/threadSlice';

function Home() {
  const dispatch = useDispatch();
  const threads = useSelector(threadSelector);
  const user = useSelector(authUser);

  useEffect(() => {
    if (threads.length === 0) {
      dispatch(fetchAllThreads());
    }
  }, []);

  return (
    <div className="threads-page">
      <div className="app-header">
        <h1>Semua Thread</h1>
        {user && <Link to="/new">Buat thread</Link>}
      </div>
      { threads.length > 0 ? (
        <ThreadWrapper threads={threads} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Home;
