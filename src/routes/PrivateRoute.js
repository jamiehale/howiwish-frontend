import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PrivateLayout from './layouts/PrivateLayout';
import useSession from '../hooks/session';

const PrivateRoute = ({
  exact,
  path,
  component: Component
}) => {
  const { isLoggedIn } = useSession();

  return (
    <Route
      exact={exact}
      path={path}
      render={() => isLoggedIn ? (
        <PrivateLayout
          component={Component}
        />
      ) : (
        <Redirect to="/login" />
      )}
    />
  );
};

export default PrivateRoute;
