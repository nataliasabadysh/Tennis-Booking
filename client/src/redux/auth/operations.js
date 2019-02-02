import axios from 'axios';
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  signOutRequest,
  signOutSuccess,
  refreshUserStart,
  refreshUserSuccess
} from './actions';
import * as selectors from './selectors';

// +DELEY
// const delay = (timeout = 500) =>
//     new Promise((resolve) => setTimeout(resolve, timeout));

// Global url for axios -   .post('http://localhost:4040'/auth/signup', credentials)
//  we changet to           .post('/auth/signup', credentials)

axios.defaults.baseURL = 'http://localhost:4040';

// по этому хедеру определяеться доступ ДЕЙСТВИЯ какие-либо 
const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = null;
};

// credentials -  тот кого мы хотим зарегестрировать -  это все данные от Юзера 
export const signUp = credentials => dispatch => {
  dispatch(signUpRequest());

  axios
    .post('/auth/signup', credentials)
    .then(({ data }) => {
      setAuthHeader(data.token);

      dispatch(signUpSuccess(data));
    })
    .catch(error => dispatch(signUpError(error)));
};

// приходит credentials и мы его отправляем на бекенд 
//  БД ожидант обькт с паролем 
export const signIn = credentials => dispatch => {
  dispatch(signInRequest());

  axios
    .post('/auth/signin', credentials)
    .then(({ data }) => {
      setAuthHeader(data.token);
      dispatch(signInSuccess(data));
    })
    .catch(error => dispatch(signInError(error)));
};

export const signOut = () => dispatch => {  
  dispatch(signOutRequest());  // Можно добавить спиннер здесь 
  


  axios.post('/auth/signout').then(() => {
    clearAuthHeader();
    dispatch(signOutSuccess()); // очищаем 
  });
};

// получить токен нужно 
export const refreshCurrentUser = () => (dispatch, getState) => {
  
  const token = selectors.getToken(getState());

  if (!token) return;

  // 
  setAuthHeader(token);

  dispatch(refreshUserStart());

  // 
  axios
    .get('/auth/current')
    .then(({ data }) => dispatch(refreshUserSuccess(data.user)))  // добовляем в СТОРЕ
    .catch(error => {
      // dispach екшен чтобы убрать токен из state
      clearAuthHeader();
      console.log('Error while refreshing: ', error);
    });
};
