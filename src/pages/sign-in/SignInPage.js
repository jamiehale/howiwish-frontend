import React from 'react';
import styled from 'styled-components';
import useSession from '../../hooks/session';
import SignInForm from './SignInForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30ch;
`;

const SignInPage = () => {
  const { signIn } = useSession();

  const handleSignIn = () => {
    signIn();
  };
  
  return (
    <Container>
      <SignInForm
        onSignIn={handleSignIn}
      />
    </Container>
  );
};

export default SignInPage;
