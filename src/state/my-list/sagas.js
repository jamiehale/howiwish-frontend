import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import uuidv4 from 'uuid/v4';
import * as actionTypes from '../action-types';
import * as myListActions from './actions';

function* addItem(action) {
  const { item } = action.payload;
  yield put(myListActions.addItemSuccess({
    id: uuidv4(),
    ...item,
    comments: [],
  }));
  yield put(push('/my-list'));
}

function* updateItem(action) {
  const { id, item } = action.payload;
  yield put(myListActions.updateItemSuccess({
    id,
    ...item
  }));
}

function* root() {
  yield takeEvery(actionTypes.MY_LIST_ADD_ITEM_REQUEST, addItem);
  yield takeEvery(actionTypes.MY_LIST_UPDATE_ITEM_REQUEST, updateItem);
}

export default root;
