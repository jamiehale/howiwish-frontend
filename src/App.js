import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { Redirect, Switch } from 'react-router-dom';
import allRoutes from './routes/all-routes';

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

  * {
    box-sizing: border-box;
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
  const routes = allRoutes.reduce((a, routeGroup) => ([
    ...a,
    ...mapRoutes(routeGroup.routes, routeGroup.component),
  ]), []);

  return (
    <>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Switch>
          <Redirect exact path="/" to="/my-list" />
          {routes}
        </Switch>
      </ConnectedRouter>
    </>
  );
};

App.propTypes = ({
  history: PropTypes.object.isRequired,
});

export default App;
