import React from 'react';
import Login from '../../components/login/login';
import { UserData } from '../../services/auth';
import './logincontainer.scss';

interface LoginContainerProps {
  loginUser: (userData: UserData) => void;
}

const LoginContainer = ({ loginUser }: LoginContainerProps) => {
  return (
    <div className="login-container">
      <Login loginUser={loginUser} />
    </div>
  );
};

export default LoginContainer;
