import ACTION_TYPES from '../actions/actionTypes';

const initialStates = null

function errorReducer(state = initialStates, action) {
    switch (action.type) {
        case ACTION_TYPES.SIGN_IN_ERROR:
        case ACTION_TYPES.SIGN_UP_ERROR:
        case ACTION_TYPES.ADD_NEW_MESSAGE_ERROR:
        case ACTION_TYPES.GET_USER_DATA_ERROR:
        case ACTION_TYPES.GET_USER_CHATS_LIST_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error
                }
                    }
        default: {
            return state;
        }
    }
}

export default errorReducer;