import * as actionTypes from '../action-types';
import errorAction from '../utils/error-action';

export const createAccountRequest = (email, password) => ({
  type: actionTypes.ACCOUNT_CREATE_REQUEST,
  payload: {
    email,
    password,
  },
});

export const createAccountSuccess = (session) => ({
  type: actionTypes.ACCOUNT_CREATE_SUCCESS,
  payload: {
    session,
  },
});

export const createAccountFailure = errorAction(actionTypes.ACCOUNT_CREATE_FAILURE);
