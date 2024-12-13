import { put } from "redux-saga/effects";
import { getUserChats, getOneChat, createNewChat } from "../api/index";
import {
  getUserChatListSuccess,
  getUserChatListError,
  getCurrentChatSucess,
  getCurrentChatError,
  createNewChatSuccess,
  createNewChatError,
} from "../actions/actionCreators";

export function* getUserChatSaga() {
  try {
    const result = yield getUserChats();
    // якщо запит був успішний - маємо згенерувати action з успішним статусом і результатом запиту
    const action = getUserChatListSuccess(result.data.data);
    // відправляємо екшн в редьюсер
    yield put(action);
  } catch (error) {
    // якщо запит був не успішний - маємо згенерувати action з статусом помилки і об'єктом помилки всередині
    const errorAction = getUserChatListError(error);
    yield put(errorAction);
  }
}

export function* getOneChatSaga(action) {
  /// робимо запит на api і опрацювання результату
  // action.payload має містити інфу про запитуваний чат
  try {
    const {
      data: { data },
    } = yield getOneChat(action.payload);
    yield put(getCurrentChatSucess(data));
  } catch (error) {
    yield put(getCurrentChatError(error));
  }
}

/*
Декомпозиція втілення нового функціоналу з api-запитом:

+1. створити 3 actionTypes для запиту, успішного результату запиту і неуспішного результату
+2. Створити actionCreators для цих трьох типів action
+3. Прописуємо у rootSaga ефект на перехоплення потрібного action
+4. Створюємо функцію-воркер, яка виконує запит на сервер і опрацьовує обидва випадки результату


*/

/// Відправку нового повідомлення (addNewMessage)

export function* addNewMessageSaga(action) {
  try {
    console.log(action.payload);
    const {
      data: { data },
    } = yield addNewMessage(action.payload);
    yield put(addNewMessageSuccess(data));
  } catch (error) {
    yield put(addNewMessageError(error));
  }
}

export function* createChatSaga(action) {
  try {
    const {
      data: { data },
    } = yield createNewChat(action.payload);
    yield put(createNewChatSuccess(data));
  } catch (error) {
    yield put(createNewChatError(error));
  }
}
