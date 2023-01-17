import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getAllUsers, getUser } from './features/auth/authAPI';
import './index.css';
import Navbar from './component/Navbar';
import {
  Detail,
  Home,
  Login,
  Register,
} from './pages';
import { isAccessTokenExist } from './utils/auth';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function initGetAuthUser() {
      const { data } = await getUser();
      dispatch({ type: 'auth/setUser', payload: data.user });
    }

    async function initGetAllUsers() {
      const { data } = await getAllUsers();
      dispatch({ type: 'auth/setAllUsers', payload: data.users });
    }

    initGetAllUsers();

    if (isAccessTokenExist()) {
      initGetAuthUser();
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
