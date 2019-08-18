import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import useSession from '../hooks/session';

const AdminRoute = ({
  exact,
  path,
  component: Component
}) => {
  const { isAdmin } = useSession();

  return (
    <Route
      exact={exact}
      path={path}
      render={() => isAdmin ? (
        <AdminLayout
          component={Component}
        />
      ) : (
        <Redirect to="/" />
      )}
    />
  );
};

export default AdminRoute;
