import { fork } from 'redux-saga/effects';
import myListSaga from './my-list/sagas';

function* rootSaga() {
  yield fork(myListSaga);
}

export default rootSaga;
