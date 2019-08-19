import React from 'react';
import styled from 'styled-components';
import PrivateLayout from './PrivateLayout';

const Container = styled.div`
  border-top: 16px solid red;
`;

const AdminLayout = ({
  component: Component
}) => (
  <Container>
    <PrivateLayout
      component={Component}
    />
  </Container>
);

export default AdminLayout;
