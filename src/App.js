import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { Redirect, Switch } from 'react-router-dom';
import allRoutes from './routes/all-routes';

const GlobalStyle = createGlobalStyle`
  :root {
    --ratio: 1.5;
    --s-5: calc(var(--s-4) / var(--ratio));
    --s-4: calc(var(--s-3) / var(--ratio));
    --s-3: calc(var(--s-2) / var(--ratio));
    --s-2: calc(var(--s-1) / var(--ratio));
    --s-1: calc(var(--s0) / var(--ratio));
    --s0: 1rem;
    --s1: calc(var(--s0) * var(--ratio));
    --s2: calc(var(--s1) * var(--ratio));
    --s3: calc(var(--s2) * var(--ratio));
    --s4: calc(var(--s3) * var(--ratio));
    --s5: calc(var(--s4) * var(--ratio));

    --border-thin: 1px;
  }

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
