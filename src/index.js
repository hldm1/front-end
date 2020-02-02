import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';


if ('serviceWorker' in navigator) {
  const registration = runtime.register();
}

const users = createStore(reducer);

ReactDOM.render(
  <Provider store={users}>
    <App />
  </Provider>
  , document.getElementById('root'));
