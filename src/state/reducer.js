import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import myList from './my-list/reducer';
import myGroups from './my-groups/reducer';

export default history => combineReducers({
  router: connectRouter(history),
  myList,
  myGroups,
});
