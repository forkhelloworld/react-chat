import ACTION_TYPES from "../actions/actionTypes";

const initialStates = [];

function chatListReducer(state = initialStates, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_USER_CHATS_LIST_SUCESS: {
      return action.payload;
    }
    case ACTION_TYPES.CREATE_NEW_CHAT_SUCCESS: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
}

// const chatListReducer = createSlice({
//     name: 'chatList',
//     initialState: [],
//     reducers: {
//         getUserChatListSuccess: (state, action) => action.payload,
//         createNewChatSuccess: (state, action) => state.push(action.payload)
//     }
// });
//

/*
const {actions} = chatListReducer;
getUserChatListSuccess(payload)
createNewChatSuccess(payload)
*/

export default chatListReducer;

// export const {getUserChatListSuccess, createNewChatSuccess} = chatListReducer.actions;
//
// export default chatListReducer.reducer;
