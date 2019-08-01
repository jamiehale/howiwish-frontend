import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as actionTypes from '../action-types';

function* addItem() {
  yield put(push('/my-list'));
}

function* root() {
  yield takeEvery(actionTypes.MY_LIST_ADD_ITEM, addItem);
}

export default root;
