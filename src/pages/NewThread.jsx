import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNewThread } from '../features/thread/threadAPI';
import { threadSelector } from '../features/thread/threadSlice';
import { useInput } from '../utils/hooks';

function NewThread() {
  const threads = useSelector(threadSelector);
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function addNewThreadToList(thread) {
    const newThreads = [thread, ...threads];
    dispatch({ type: 'thread/setThreads', payload: newThreads });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { data } = await addNewThread({ title, body });
    await addNewThreadToList(data.thread);
    navigate('/');
  }

  return (
    <div className="new-thread-wrapper">
      <h1>Buat Thread Baru</h1>
      <div className="new-thread-form">
        <label htmlFor="title">Judul</label>
        <input type="text" id="judul" value={title} onChange={onTitleChange} />
        <label htmlFor="body">Konten</label>
        <textarea id="body" value={body} onChange={onBodyChange} rows="5" />
        <button type="submit" className="new-thread-form__submit-button" onClick={handleSubmit}>Buat</button>
      </div>
    </div>
  );
}

export default NewThread;
