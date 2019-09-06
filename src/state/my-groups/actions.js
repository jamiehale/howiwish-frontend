import * as actionTypes from '../action-types';
import errorAction from '../utils/error-action';

export const loadAllRequest = () => ({
  type: actionTypes.MY_GROUPS_LOAD_ALL_REQUEST,
});

export const loadAllSuccess = groups => ({
  type: actionTypes.MY_GROUPS_LOAD_ALL_SUCCESS,
  payload: {
    groups,
  },
});

export const loadAllFailure = errorAction(actionTypes.MY_GROUPS_LOAD_ALL_FAILURE);

export const loadRequest = id => ({
  type: actionTypes.MY_GROUPS_LOAD_REQUEST,
  payload: {
    id,
  },
});

export const loadSuccess = group => ({
  type: actionTypes.MY_GROUPS_LOAD_SUCCESS,
  payload: {
    group,
  },
});

export const loadFailure = errorAction(actionTypes.MY_GROUPS_LOAD_FAILURE);

export const createGroupRequest = (name, description) => ({
  type: actionTypes.MY_GROUPS_CREATE_REQUEST,
  payload: {
    name,
    description,
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
