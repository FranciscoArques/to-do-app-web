import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { loginUser, selectAuth } from '../slices/authSlice';

const LoginPage: React.FC = () => {

  const dispatch = useAppDispatch();
  const auth = useAppSelector(selectAuth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} disabled={auth.loading}>
        {auth.loading ? 'Logging in...' : 'Login'}
      </button>
      {auth.error && <p>{auth.error}</p>}
    </div>
  );
};

export default LoginPage;
