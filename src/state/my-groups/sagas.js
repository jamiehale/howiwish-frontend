import { put, takeEvery, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import uuidv4 from 'uuid/v4';
import * as actionTypes from '../action-types';
import delay from '../utils/delay';
import * as myGroupsActions from './actions';
import * as myGroupsSelectors from './selectors';
import * as sessionSelectors from '../session/selectors';

function* loadAllGroups() {
  yield delay(1000);
  const groups = yield(select(myGroupsSelectors.getMyGroups));
  yield put(myGroupsActions.loadAllSuccess(groups));
};

function* loadGroup(action) {
  const { id } = action.payload;
  yield delay(1000);
  const group = yield(select(myGroupsSelectors.getMyGroupFromSaga(id)));
  yield put(myGroupsActions.loadSuccess(group));
};

function* createGroup(action) {
  const { name, description } = action.payload;
  yield delay(1000);
  const groupId = uuidv4();
  const myId = select(sessionSelectors.getId);
  yield put(myGroupsActions.createGroupSuccess({
    id: groupId,
    name,
    description,
    members: [
      myId,
    ],
  }));
  yield put(push(`/my-groups/${groupId}`));
}

function* updateGroup(action) {
  const { id, group } = action.payload;
  yield put(myGroupsActions.updateGroupSuccess({
    id,
    ...group
  }));
}

function* root() {
  yield takeEvery(actionTypes.MY_GROUPS_LOAD_ALL_REQUEST, loadAllGroups);
  yield takeEvery(actionTypes.MY_GROUPS_LOAD_REQUEST, loadGroup);
  yield takeEvery(actionTypes.MY_GROUPS_CREATE_REQUEST, createGroup);
  yield takeEvery(actionTypes.MY_GROUPS_UPDATE_REQUEST, updateGroup);
}

export default root;
