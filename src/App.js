import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { Redirect, Switch } from 'react-router-dom';
import { allPublicRoutes, allPrivateRoutes, allAdminRoutes } from './routes/all-routes';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import AdminRoute from './routes/AdminRoute';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    font-size: 100%;
  }
`;

const mapRoutes = (routes, RouteComponent) => routes.map(route => (
  <RouteComponent
    key={route.path}
    exact
    path={route.path}
    component={route.component}
  />
));

const App = ({ history }) => {
  const publicRoutes = mapRoutes(allPublicRoutes, PublicRoute);
  const privateRoutes = mapRoutes(allPrivateRoutes, PrivateRoute);
  const adminRoutes = mapRoutes(allAdminRoutes, AdminRoute);

  return (
    <>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Switch>
          <Redirect exact path="/" to="/my-list" />
          {publicRoutes}
          {privateRoutes}
          {adminRoutes}
        </Switch>
      </ConnectedRouter>
    </>
  );
};

App.propTypes = ({
  history: PropTypes.object.isRequired,
});

export default App;
