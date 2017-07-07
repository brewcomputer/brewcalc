import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory'

import { createStore } from 'redux'
import reducer from './redux/reducers'

const history = createHistory()
const store = createStore(reducer)

render(
    <App history={history} store={store} />,
    document.getElementById('root')
)
