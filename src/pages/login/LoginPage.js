import React from 'react';
import useSession from '../../hooks/session';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const { login } = useSession();

  const handleLogin = () => {
    login();
  };
  
  return (
    <>
      <LoginForm
        onLogin={handleLogin}
      />
    </>
  );
};

export default LoginPage;
