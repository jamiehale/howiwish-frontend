import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theCenter, theStack } from '../../every-layout';

const Container = styled.div`
  ${theCenter('700px')}
  ${theStack('var(--s1)')}
`;

const PublicLayout = ({
  component: Component
}) => (
  <Container>
    <h1>Public Layout</h1>
    <nav>
      <Link to="/sign-in">Sign In</Link>
      <Link to="/sign-up">Sign Up</Link>
    </nav>
    <Component />
  </Container>
);

export default PublicLayout;
