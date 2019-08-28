import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PrivateLayout from './layouts/PrivateLayout';
import useSession from '../hooks/session';

const PrivateRoute = ({
  exact,
  path,
  component: Component
}) => {
  const { isSignedIn } = useSession();

  return (
    <Route
      exact={exact}
      path={path}
      render={() => isSignedIn ? (
        <PrivateLayout
          component={Component}
        />
      ) : (
        <Redirect to="/sign-in" />
      )}
    />
  );
};

export default PrivateRoute;
