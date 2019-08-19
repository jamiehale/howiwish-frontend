import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const PublicLayout = ({
  component: Component
}) => (
  <Container>
    <h1>Public Layout</h1>
    <nav>
      <Link to="/login">Login</Link>
    </nav>
    <Component />
  </Container>
);

export default PublicLayout;
