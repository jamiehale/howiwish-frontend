import React from 'react';
import PrivateLayout from './PrivateLayout';

const AdminLayout = ({
  component: Component
}) => (
  <div>
    <h1>Admin Layout</h1>
    <PrivateLayout
      component={Component}
    />
  </div>
);

export default AdminLayout;
