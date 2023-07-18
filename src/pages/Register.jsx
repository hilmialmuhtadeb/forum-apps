import React from 'react';
import { registerUser } from '../features/auth/authAPI';
import { useInput } from '../utils/hooks';

function Register() {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  async function registerHandler() {
    await registerUser({ name, email, password })
      .then(() => {
        alert('Akun baru berhasil dibuat!');
        window.location.href = '/login';
      })
      .catch(() => {
        alert('Terjadi kesalahan saat membuat akun baru!');
      });
  }

  return (
    <div className="auth-box">
      <h1>Daftar Akun</h1>
      <div className="auth-form">
        <label htmlFor="name">Nama</label>
        <input type="text" id="name" value={name} onChange={onNameChange} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={onEmailChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={onPasswordChange} />
        <button type="submit" onClick={registerHandler}>Daftar</button>
      </div>
    </div>
  );
}

export default Register;
