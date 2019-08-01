import * as actionTypes from '../action-types';
import errorAction from '../utils/error-action';

export const loadRequest = () => ({
  type: actionTypes.MY_LIST_LOAD_REQUEST,
});

export const loadSuccess = (items) => ({
  type: actionTypes.MY_LIST_LOAD_SUCCESS,
  payload: {
    items,
  },
});

export const loadFailure = errorAction(actionTypes.MY_LIST_LOAD_FAILURE);

export const addItem = (item) => ({
  type: actionTypes.MY_LIST_ADD_ITEM,
  payload: {
    item,
  },
});
