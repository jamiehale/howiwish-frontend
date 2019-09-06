import * as R from 'ramda';
import * as actionTypes from '../action-types';

const initialState = {
  allIds: [],
  byId: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MY_GROUPS_CREATE_SUCCESS: {
      const { group } = action.payload;
      return {
        ...state,
        allIds: R.append(group.id, state.allIds),
        byId: {
          ...state.byId,
          [group.id]: group,
        },
      };
    }
    case actionTypes.MY_GROUPS_UPDATE_SUCCESS: {
      const { group } = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [group.id]: group,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
