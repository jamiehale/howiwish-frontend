import { fork } from 'redux-saga/effects';
import sessionSaga from './session/sagas';
import myListSaga from './my-list/sagas';

function* rootSaga() {
  yield fork(sessionSaga);
  yield fork(myListSaga);
}

export default rootSaga;
