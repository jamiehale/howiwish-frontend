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

export const updateItemRequest = (id, item) => ({
  type: actionTypes.MY_LIST_UPDATE_ITEM_REQUEST,
  payload: {
    id,
    item,
  },
});

export const updateItemSuccess = (item) => ({
  type: actionTypes.MY_LIST_UPDATE_ITEM_SUCCESS,
  payload: {
    item,
  },
});

export const updateItemFailure = errorAction(actionTypes.MY_LIST_UPDATE_ITEM_FAILURE);

