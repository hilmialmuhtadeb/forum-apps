import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAllUsers, getUser, loginUser } from '../features/auth/authAPI';
import { authUser } from '../features/auth/authSlice';
import { useInput } from '../utils/hooks';

function Login() {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const user = useSelector(authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function loginHandler() {
    await loginUser({ email, password });

    const { data } = await getUser();
    dispatch({ type: 'auth/setUser', payload: data.user });

    async function initGetAllUsers() {
      const { usersData } = await getAllUsers();
      dispatch({ type: 'auth/setAllUsers', payload: usersData.users });
    }

    initGetAllUsers();

    navigate('/');
  }

  if (user) {
    return (
      <div className="auth-box">
        <h1>Anda sudah login</h1>
        <div className="alert">
          <Link to="/">Kembali ke Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-box">
      <h1>Login</h1>
      <div className="auth-form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={onEmailChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={onPasswordChange} />
        <button type="submit" onClick={loginHandler}>Masuk</button>
      </div>
      <Link to="/register">Daftar Akun</Link>
    </div>
  );
}

export default Login;
