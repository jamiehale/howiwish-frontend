import * as R from 'ramda';
import uuidv4 from 'uuid/v4';
import * as actionTypes from '../action-types';

/*
const items = [
  {
    id: uuidv4(),
    name: 'A thing',
    description: 'This is the first thing.',
  },
  {
    id: uuidv4(),
    name: 'Another thing',
    description: 'This is another thing.',
  },
  {
    id: uuidv4(),
    name: 'A third thing',
    description: 'This is a third thing.',
  },
];

const initialState = {
  allIds: items.map(R.prop('id')),
  byId: items.reduce((idMap, item) => ({
    ...idMap,
    [item.id]: item,
  }), {}),
};
*/

const initialState = {
  allIds: [],
  byId: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MY_LIST_ADD_ITEM_SUCCESS: {
      const { item } = action.payload;
      return {
        ...state,
        allIds: R.append(item.id, state.allIds),
        byId: {
          ...state.byId,
          [item.id]: item,
        },
      };
    }
    case actionTypes.MY_LIST_UPDATE_ITEM_SUCCESS: {
      const { item } = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [item.id]: item,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
