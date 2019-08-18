import * as actionTypes from '../action-types';
import errorAction from '../utils/error-action';

export const loadRequest = () => ({
  type: actionTypes.MY_GROUPS_LOAD_REQUEST,
});

export const loadSuccess = (groups) => ({
  type: actionTypes.MY_GROUPS_LOAD_SUCCESS,
  payload: {
    groups,
  },
});

export const loadFailure = errorAction(actionTypes.MY_GROUPS_LOAD_FAILURE);

export const createGroupRequest = (group) => ({
  type: actionTypes.MY_GROUPS_CREATE_REQUEST,
  payload: {
    group,
  },
});

export const createGroupSuccess = (group) => ({
  type: actionTypes.MY_GROUPS_CREATE_SUCCESS,
  payload: {
    group,
  },
});

export const createGroupFailure = errorAction(actionTypes.MY_GROUPS_CREATE_FAILURE);

export const updateGroupRequest = (id, group) => ({
  type: actionTypes.MY_GROUPS_UPDATE_REQUEST,
  payload: {
    id,
    group,
  },
});

export const updateGroupSuccess = (group) => ({
  type: actionTypes.MY_GROUPS_UPDATE_SUCCESS,
  payload: {
    group,
  },
});

export const updateGroupFailure = errorAction(actionTypes.MY_GROUPS_UPDATE_FAILURE);
