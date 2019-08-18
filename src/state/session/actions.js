import * as actionTypes from '../action-types';
import errorAction from '../utils/error-action';

export const createRequest = () => ({
  type: actionTypes.SESSION_CREATE_REQUEST,
});

export const createSuccess = (session) => ({
  type: actionTypes.SESSION_CREATE_SUCCESS,
  payload: {
    session,
  },
});

export const createFailure = errorAction(actionTypes.SESSION_CREATE_FAILURE);

export const destroyRequest = () => ({
  type: actionTypes.SESSION_DESTROY_REQUEST,
});

export const destroySuccess = () => ({
  type: actionTypes.SESSION_DESTROY_SUCCESS,
});

export const destroyFailure = errorAction(actionTypes.SESSION_DESTROY_FAILURE);
