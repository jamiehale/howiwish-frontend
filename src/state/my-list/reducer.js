import * as actionTypes from '../action-types';

const initialState = [
  {
    name: 'A thing',
    description: 'This is the first thing.',
  },
  {
    name: 'Another thing',
    description: 'This is another thing.',
  },
  {
    name: 'A third thing',
    description: 'This is a third thing.',
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MY_LIST_ADD_ITEM_SUCCESS: {
      const { item } = action.payload;
      return [
        ...state,
        item,
      ];
    }
    default: {
      return state;
    }
  }
};

export default reducer;
