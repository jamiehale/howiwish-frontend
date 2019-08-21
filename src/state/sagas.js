import { fork } from 'redux-saga/effects';
import sessionSaga from './session/sagas';
import myListSaga from './my-list/sagas';
import myGroupsSaga from './my-groups/sagas';

function* rootSaga() {
  yield fork(sessionSaga);
  yield fork(myListSaga);
  yield fork(myGroupsSaga);
}

export default rootSaga;
