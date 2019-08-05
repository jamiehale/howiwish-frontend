import * as actionTypes from '../action-types';

const initialState = [
  {
    name: 'A thing',
  },
  {
    name: 'Another thing',
  },
  {
    name: 'A third thing',
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
