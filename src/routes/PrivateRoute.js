import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useUser from '../hooks/user';

const PrivateRoute = ({
  exact,
  path,
  component: Component
}) => {
  const user = useUser();

  return (
    <Route
      exact={exact}
      path={path}
      render={() => user.isLoggedIn ? (
        <Component />
      ) : (
        <Redirect to="/login" />
      )}
    />
  );
};

export default PrivateRoute;
