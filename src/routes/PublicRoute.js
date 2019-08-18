import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import useSession from '../hooks/session';

const PublicRoute = ({
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
        <Redirect to="/" />
      ) : (
        <PublicLayout
          component={Component}
        />
      )}
    />
  );
};

export default PublicRoute;
