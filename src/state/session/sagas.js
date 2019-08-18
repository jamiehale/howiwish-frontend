import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import uuidv4 from 'uuid/v4';
import * as actionTypes from '../action-types';
import * as sessionActions from './actions';

function* createSession() {
  yield put(sessionActions.createSuccess({
    id: uuidv4(),
    isAdmin: true,
  }));
  yield put(push('/my-list'));
}

function* destroySession() {
  yield put(sessionActions.destroySuccess());
  yield put(push('/'));
}

function* root() {
  yield takeEvery(actionTypes.SESSION_CREATE_REQUEST, createSession);
  yield takeEvery(actionTypes.SESSION_DESTROY_REQUEST, destroySession);
}

export default root;
