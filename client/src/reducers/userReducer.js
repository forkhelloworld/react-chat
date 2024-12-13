import ACTION_TYPES from "../actions/actionTypes";

const initialStates = null;

function userReducer(state = initialStates, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_USER_DATA_SUCCESS:
    case ACTION_TYPES.SIGN_IN_SUCCESS:
    case ACTION_TYPES.SIGN_UP_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

// const userReducer = createReducer(initialStates, (builder) => {
//     builder
//     .addCase(getUserDataSuccess, (state, action) => action.payload)
//     .addCase(ACTION_TYPES.SIGN_IN_SUCCESS, (state, action) => action.payload)
//     .addCase(ACTION_TYPES.SIGN_UP_SUCCESS, (state, action) => action.payload)
// });

export default userReducer;
