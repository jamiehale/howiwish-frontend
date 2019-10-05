import React from 'react';
import styled from 'styled-components';
import useRegistration from '../../hooks/registration';
import SignUpForm from './SignUpForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30ch;
`;

const SignUpPage = () => {
  const { signUp } = useRegistration();

  const handleSignUp = () => {
    signUp();
  };
  
  return (
    <Container>
      <SignUpForm
        onSignUp={handleSignUp}
      />
    </Container>
  );
};

export default SignUpPage;
