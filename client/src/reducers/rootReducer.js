import { combineReducers } from "redux";
import chatListReducer from "./chatListReducer";
import currentChatReducer from "./currentChatReducer";
import errorReducer from "./errorReducer";
import fetchingReducer from "./fetchingReducer";
import userReducer from "./userReducer";

const initialStates = {
  user: null,
  currentChat: null,
  error: null,
  chatList: [],
  isFetching: false,
};

const rootReducer = combineReducers({
  user: userReducer,
  chatList: chatListReducer,
  currentChat: currentChatReducer,
  error: errorReducer,
  isFetching: fetchingReducer,
});

export default rootReducer;
