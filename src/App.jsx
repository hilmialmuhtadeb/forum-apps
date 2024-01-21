import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './component/Navbar';
import {
  Detail,
  Home,
  Login,
  NewThread,
  NotFound,
  Register,
} from './pages';
import { isAccessTokenExist } from './utils/auth';
import { fetchAllUsers, fetchAuthUser } from './features/auth/authThunk';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const initGetAllUsers = async () => {
      dispatch(fetchAllUsers());
    };

    const initGetAuthUser = async () => {
      dispatch(fetchAuthUser());
    };

    initGetAllUsers();

    if (isAccessTokenExist()) {
      initGetAuthUser();
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/new" element={<NewThread />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
