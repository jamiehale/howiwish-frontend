import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import * as actionTypes from '../action-types';
import delay from '../utils/delay';

function* loadInvitation(action) {
  const { invitationId } = action.payload;
  yield delay(1000);
  const { data: invitation } = { data: { isRegisteredUser: true } };
  if (invitation.isRegisteredUser) {
    yield put(push(`/sign-in?invitationId=${invitationId}`));
  } else {
    yield put(push(`/sign-up?invitationId=${invitationId}`));
  }
}

function* root() {
  yield takeEvery(actionTypes.INVITATION_LOAD_REQUEST, loadInvitation);
}

export default root;
