import React from 'react'
import RecipeSpecs from './RecipeSpecs'
import renderer from 'react-test-renderer'
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

it('renders correctly', () => {
  const tree = renderer
    .create(
    <Provider store={store}>
      <RecipeSpecs recipe={recipe} equipment={equipment} />
    </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly if equipment is null', () => {
  const tree = renderer
    .create(
    <Provider store={store}>
      <RecipeSpecs recipe={recipe} equipment={null} />
    </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})