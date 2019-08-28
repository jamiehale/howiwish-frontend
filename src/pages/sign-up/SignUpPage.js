import React from 'react';
import useRegistration from '../../hooks/registration';
import SignUpForm from './SignUpForm';

const SignUpPage = () => {
  const { signUp } = useRegistration();

  const handleSignUp = () => {
    signUp();
  };
  
  return (
    <>
      <SignUpForm
        onSignUp={handleSignUp}
      />
    </>
  );
};

export default SignUpPage;
