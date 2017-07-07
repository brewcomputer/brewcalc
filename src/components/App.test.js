import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createHistory from 'history/createBrowserHistory'
import reducer from '../redux/reducers'
import { createStore } from 'redux'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const history = createHistory()
  const store = createStore(reducer)

  ReactDOM.render(<App history={history} store={store} />, div);
});
