import * as actionTypes from '../action-types';

const initialState = {
  session: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SESSION_CREATE_SUCCESS: {
      const { session } = action.payload;
      return {
        ...state,
        session,
      };
    }
    case actionTypes.SESSION_DESTROY_SUCCESS: {
      return {
        ...state,
        session: undefined,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
