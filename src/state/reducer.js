import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
// import session from './session/reducer';

export default history => combineReducers({
  router: connectRouter(history),
  // session,
});
