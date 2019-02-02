import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import './index.css';
import App from './components/App/App';

// <PersistGate loading={ Spiner } persistor={persistor}> Достаем с ЛС данные перед тем как Reder ить
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// - При логине или логауте сохранить/удалить токен в localstorage
// - При посещении страницы, если токен в localstorage есть
//   - Запрос на бекенд, отсылая токен
