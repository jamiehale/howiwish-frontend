import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as actionTypes from '../action-types';
import * as myListActions from './actions';

function* addItem(action) {
  const { item } = action.payload;
  yield put(myListActions.addItemSuccess(item));
  yield put(push('/my-list'));
}

function* root() {
  yield takeEvery(actionTypes.MY_LIST_ADD_ITEM_REQUEST, addItem);
}

export default root;
