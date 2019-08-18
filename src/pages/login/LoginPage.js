import React from 'react';
import useSession from '../../hooks/session';
import Button from '../../components/Button';

const LoginPage = () => {
  const { login } = useSession();

  const handleClickLogin = () => {
    login();
  };
  
  return (
    <>
      <Button onClick={handleClickLogin}>Login</Button>
    </>
  );
};

export default LoginPage;
