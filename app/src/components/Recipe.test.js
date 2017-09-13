import React from 'react'
import ReactDOM from 'react-dom'
import Recipe from './Recipe'

import { recipe } from '../data/recipe'
import { equipment } from '../data/equipment'

import { createStore } from 'redux'
import updateEditor from '../redux/reducers/updateEditor'
import { persistedState } from '../redux/reducers/updateEditor'
import { Provider } from 'react-redux'

const store = createStore(
    updateEditor,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <Provider store={store}>
            <Recipe recipe={recipe} equipment={equipment} />
        </Provider>
        , div)
})

it('renders without crashing with null equipment', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <Provider store={store}>
            <Recipe recipe={recipe} equipment={null} />
        </Provider>, div)
})
