import ACTION_TYPES from "../actions/actionTypes";

const initialStates = null;

function currentChatReducer(state = initialStates, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_NEW_MESSAGE_SUCCESS: {
      //     const nextState = produce(state, (draft) => {
      //     draft.currentChat.messages.push(action.payload);
      //     });
      //    return nextState;
      const newMessage = action.payload;

      const messageAuthor = state.members.find(
        (userObj) => userObj._id === newMessage.author,
      );
      newMessage.author = messageAuthor;
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }

    case ACTION_TYPES.GET_CURRENT_CHAT_SUCCESS: {
      const currentChat = action.payload;
      const userMap = new Map();
      currentChat.members.forEach((user) => {
        userMap.set(user._id, user);
      });

      return {
        ...currentChat,
        messages: currentChat.messages.map((message) => {
          message.author = userMap.get(message.author);
          return message;
        }),
      };
      /// Ось тут в редьюсері ми можемо робити будь-які СИНХРОННІ перетворення даних
    }

    default: {
      return state;
    }
  }
}

// const currentChatReducer = createReducer(initialStates, (builder) => {
//     builder
//     .addCase(addNewMessage, (state, action) => {
//         const newMessage = action.payload;
//         const messageAuthor = state.members.find((userObj) => userObj._id === newMessage.author);
//         newMessage.author = messageAuthor;
//         state.messages.push(newMessage);
//     })
//     .addCase(getCurrentChatSucess, (state, action) => {
//         const currentChat = action.payload;
//         const userMap = new Map();
//         currentChat.members.forEach((user) => {
//             userMap.set(user._id, user);
//         });
//         currentChat.messages = currentChat.messages.map((message) => {
//           message.author = userMap.get(message.author);
//              return message
//           });
//          return currentChat;
//     })
// })
//
export default currentChatReducer;
