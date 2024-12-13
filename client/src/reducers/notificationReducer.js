import ACTION_TYPES from "../actions/actionTypes";

const initialStates = null;

function notificationReducer(state = initialStates, action) {
  switch (action.type) {
    case ACTION_TYPES.NEW_NOTIFICATION: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default notificationReducer;
