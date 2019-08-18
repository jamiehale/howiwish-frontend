import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import session from './session/reducer';
import myList from './my-list/reducer';
import myGroups from './my-groups/reducer';

export default history => combineReducers({
  router: connectRouter(history),
  session,
  myList,
  myGroups,
});
