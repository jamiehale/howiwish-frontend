import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import MyListPage from './pages/my-list/MyListPage';
import MyGroupsPage from './pages/my-groups/MyGroupsPage';

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

const App = ({ history }) => (
  <>
    <GlobalStyle />
    <ConnectedRouter history={history}>
      <Switch>
        <Redirect exact path="/" to="/my-list" />
        <Route exact path="/my-list" component={MyListPage} />
        <Route exact path="/my-groups" component={MyGroupsPage} />
      </Switch>
    </ConnectedRouter>
  </>
);

App.propTypes = ({
  history: PropTypes.object.isRequired,
});

export default App;
