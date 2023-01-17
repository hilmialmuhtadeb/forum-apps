import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { authUser } from '../features/auth/authSlice';

function Navbar() {
  const user = useSelector(authUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem('access_token');
    dispatch({ type: 'auth/setUser', payload: null });

    navigate('/login');
  }

  return (
    <nav>
      <div className="nav-logo">
        <Link className="app-title" to="/">Forum Apps</Link>
      </div>
      { user && (
        <div className="nav-mid">
          <img src={user.avatar} alt="avatar" />
          <p>{user.name}</p>
        </div>
      )}
      <div className="nav-right">
        <Link className="nav-right__item" to="/">Home</Link>
        { user ? (
          <a href="/" onClick={handleLogout}>Logout</a>
        ) : (
          <Link className="nav-right__item login" to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
