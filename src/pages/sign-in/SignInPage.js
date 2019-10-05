import React from 'react';
import styled from 'styled-components';
import useSession from '../../hooks/session';
import SignInForm from './SignInForm';
import { theStack, theCenter, theBox } from '../../every-layout';

const Container = styled.div`
  ${theBox('var(--s1)', 'var(--border-thin)')}
  ${theCenter('30ch')}
  ${theStack('var(--s1)')}
`;

const SignInPage = () => {
  const { signIn } = useSession();

  const handleSignIn = () => {
    signIn();
  };
  
  return (
    <Container>
      <h1>Sign In</h1>
      <SignInForm
        onSignIn={handleSignIn}
      />
    </Container>
  );
};

export default SignInPage;
