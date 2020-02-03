import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
import App from './app';

it('renders without crashing', () => {
  const users = createStore(reducer);
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={users}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
