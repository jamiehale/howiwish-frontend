import * as actionTypes from '../action-types';

const initialState = [
  'A thing',
  'Another thing',
  'A third thing',
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MY_LIST_ADD_ITEM: {
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
