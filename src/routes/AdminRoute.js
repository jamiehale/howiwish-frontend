import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useUser from '../hooks/user';

const AdminRoute = ({
  exact,
  path,
  component: Component
}) => {
  const user = useUser();

  return (
    <Route
      exact={exact}
      path={path}
      render={() => user.isAdmin ? (
        <Component />
      ) : (
        <Redirect to="/" />
      )}
    />
  );
};

export default AdminRoute;
