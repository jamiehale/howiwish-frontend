import * as actionTypes from '../action-types';

const initialState = [
  'A thing',
  'Another thing',
  'A third thing',
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default reducer;
