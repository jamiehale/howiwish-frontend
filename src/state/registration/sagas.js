import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import uuidv4 from 'uuid/v4';
import * as actionTypes from '../action-types';
import * as sessionActions from '../session/actions';

function* createAccount(action) {
  // const { email, password } = action.payload;
  yield put(sessionActions.createSuccess({
    id: uuidv4(),
  }));
  yield put(push('/my-list'));
}

function* root() {
  yield takeEvery(actionTypes.ACCOUNT_CREATE_REQUEST, createAccount);
}

export default root;
