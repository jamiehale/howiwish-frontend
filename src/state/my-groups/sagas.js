import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import uuidv4 from 'uuid/v4';
import * as actionTypes from '../action-types';
import delay from '../utils/delay';
import * as myGroupsActions from './actions';

function* createGroup(action) {
  const { group } = action.payload;
  yield delay(1000);
  const id = uuidv4();
  yield put(myGroupsActions.createGroupSuccess({
    id,
    ...group,
  }));
  yield put(push(`/my-groups/${id}`));
}

function* updateGroup(action) {
  const { id, group } = action.payload;
  yield put(myGroupsActions.updateGroupSuccess({
    id,
    ...group
  }));
}

function* root() {
  yield takeEvery(actionTypes.MY_GROUPS_CREATE_REQUEST, createGroup);
  yield takeEvery(actionTypes.MY_GROUPS_UPDATE_REQUEST, updateGroup);
}

export default root;
