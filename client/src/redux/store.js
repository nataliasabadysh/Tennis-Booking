import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'; // 
// persistStore - для REdux хранилища что бы оно могло сохраняться 
// persistReducer - оборачивает определеннный редюсер + созранение в ЛОкал сторедж 

import storage from 'redux-persist/lib/storage'; 
 // storage - ссылка на ЛокалСторедж в браузере 

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import sessionReducer from './auth/sessionReducer';

//  persis for all store  и сохраняем только - booking
const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['booking'] //  cart to lS -  whitelist только то что здесь указываем передаеться в  ЛС 
};

// persis for Reducer - session сохраняем только - token 
const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token']  //  token to LS 
};

//  
const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionReducer),
   booking: (state = []) => state
});


const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const middleware = [thunk];

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);

// 1. пишем конфиг персиста кусков стейта
// 2. оборачивает редюсеры в персист с конфигами
// 3. оборачиваем стор в персистор
// 4. ставим гейт
// 5. пишем логику рефреша юзвера
