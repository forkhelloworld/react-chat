import {put} from 'redux-saga/effects';
import {getUserData, signIn, signUp} from '../api/index';
import {getUserDataSuccess, getUserDataError, signInSuccess, signInError, signUpSuccess, signUpError} from '../actions/actionCreators';
import history from '../history';

export function* getUserDataSaga() {
    try {
     const {data: {data}} =  yield getUserData();
     const action = getUserDataSuccess(data);
     yield put(action);
    } catch(error) {
        const errorAction = getUserDataError(error);
        yield put(errorAction);
    }
}

/*
Поточна таска: реалізувати SignIn та SignUp через saga
1. Створити 3 actionTypes + actionCreator
2. Прописати саги для обох роутів
3. Прописати в редьюсері оновлення стану
3*: Переписати компоненти SignIn, SignUp на відправку екшена


*/



export function* signInSaga(action) {
    try {
       const {data: {data}} = yield signIn(action.payload);
       yield put(signInSuccess(data));
       history.push('/messenger');
    } catch(error) {
       yield put(signInError(error));
    }
}

export function* signUpSaga(action) {
  try {
   const {data: {data}} = yield signUp(action.payload);
    yield put(signUpSuccess(data));
    history.push('/messenger');
    } catch(error) {
     yield put(signUpError(error));
    }
}