import ACTION_TYPES from "./actionTypes";
import constants from "../constants";

export const getUserDataRequest = () => ({
  type: ACTION_TYPES.GET_USER_DATA_REQUEST,
});

export const getUserDataSuccess = (payload) => ({
  type: ACTION_TYPES.GET_USER_DATA_SUCCESS,
  payload,
});

export const getUserDataError = (error) => ({
  type: ACTION_TYPES.GET_USER_DATA_ERROR,
  error,
});

export const signInRequest = (payload) => ({
  type: ACTION_TYPES.SIGN_IN_REQUEST,
  payload,
});

export const signInSuccess = (payload) => ({
  type: ACTION_TYPES.SIGN_IN_SUCCESS,
  payload,
});

export const signInError = (error) => ({
  type: ACTION_TYPES.SIGN_IN_ERROR,
  error,
});

export const signUpRequest = (payload) => ({
  type: ACTION_TYPES.SIGN_UP_REQUEST,
  payload,
});

export const signUpSuccess = (payload) => ({
  type: ACTION_TYPES.SIGN_UP_SUCCESS,
  payload,
});

export const signUpError = (error) => ({
  type: ACTION_TYPES.SIGN_UP_ERROR,
});

export const addNewMessageRequest = (payload) => ({
  type: ACTION_TYPES.ADD_NEW_MESSAGE_REQUEST,
  payload,
});

export const addNewMessage = (payload) => ({
  type: constants.ADD_MESSAGE_TO_CHAT,
  payload,
});

export const getUserChatsList = () => ({
  type: ACTION_TYPES.GET_USER_CHATS_LIST_REQUEST,
});

export const getUserChatListSuccess = (payload) => ({
  type: ACTION_TYPES.GET_USER_CHATS_LIST_SUCESS,
  payload,
});

export const getUserChatListError = (error) => ({
  type: ACTION_TYPES.GET_USER_CHATS_LIST_ERROR,
  error,
});

export const getCurrentChatRequest = (payload) => ({
  type: ACTION_TYPES.GET_CURRENT_CHAT_REQUEST,
  payload,
});

export const getCurrentChatSucess = (payload) => ({
  type: ACTION_TYPES.GET_CURRENT_CHAT_SUCCESS,
  payload,
});

export const getCurrentChatError = (error) => ({
  type: ACTION_TYPES.GET_CURRENT_CHAT_ERROR,
  error,
});

export const createNewChatRequest = (payload) => ({
  type: ACTION_TYPES.CREATE_NEW_CHAT_REQUEST,
  payload,
});

export const createNewChatSuccess = (payload) => ({
  type: ACTION_TYPES.CREATE_NEW_CHAT_SUCCESS,
  payload,
});

export const createNewChatError = (error) => ({
  type: ACTION_TYPES.CREATE_NEW_CHAT_ERROR,
  error,
});
