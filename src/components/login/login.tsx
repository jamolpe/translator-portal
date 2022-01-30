import React, { useState } from 'react';
import { UserData } from '../../services/auth';
import './login.scss';

interface LoginProps {
  loginUser: (userData: UserData) => Promise<void>;
}

const Login = ({ loginUser }: LoginProps) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const login = () => {
    loginUser({ email, password });
  };
  return (
    <div>
      <h1>Mail</h1>
      <input placeholder="email" onChange={(e) => setemail(e.target.value)} />
      <h1>Password</h1>
      <input
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={() => login()}>login</button>
    </div>
  );
};

export default Login;
