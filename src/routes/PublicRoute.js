import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = ({
  exact,
  path,
  component: Component
}) => (
  <Route
    exact={exact}
    path={path}
    component={Component}
  />
);

export default PublicRoute;
