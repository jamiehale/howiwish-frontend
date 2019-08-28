import * as actionTypes from '../action-types';
import errorAction from '../utils/error-action';

export const loadRequest = (invitationId) => ({
  type: actionTypes.INVITATION_LOAD_REQUEST,
  payload: {
    invitationId,
  },
});

export const loadSuccess = (invitation) => ({
  type: actionTypes.INVITATION_LOAD_SUCCESS,
  payload: {
    invitation,
  },
});

export const loadFailure = errorAction(actionTypes.INVITATION_LOAD_FAILURE);
