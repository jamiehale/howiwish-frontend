import React from 'react';
import useSession from '../../hooks/session';
import SignInForm from './SignInForm';

const SignInPage = () => {
  const { signIn } = useSession();

  const handleSignIn = () => {
    signIn();
  };
  
  return (
    <>
      <SignInForm
        onSignIn={handleSignIn}
      />
    </>
  );
};

export default SignInPage;
