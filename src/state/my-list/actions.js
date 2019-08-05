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

export const addItemRequest = (item) => ({
  type: actionTypes.MY_LIST_ADD_ITEM_REQUEST,
  payload: {
    item,
  },
});

export const addItemSuccess = (item) => ({
  type: actionTypes.MY_LIST_ADD_ITEM_SUCCESS,
  payload: {
    item,
  },
});

export const addItemFailure = errorAction(actionTypes.MY_LIST_ADD_ITEM_FAILURE);
