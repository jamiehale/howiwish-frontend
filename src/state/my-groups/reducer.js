import * as R from 'ramda';
import uuidv4 from 'uuid/v4';
import * as actionTypes from '../action-types';

const groups = [
  {
    id: uuidv4(),
    name: 'Hales of Markham',
  },
  {
    id: uuidv4(),
    name: 'Hales Sr.',
  },
  {
    id: uuidv4(),
    name: 'Heroux Sr.',
  },
];

const initialState = {
  allIds: groups.map(R.prop('id')),
  byId: groups.reduce((idMap, group) => ({
    ...idMap,
    [group.id]: group,
  }), {}),
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