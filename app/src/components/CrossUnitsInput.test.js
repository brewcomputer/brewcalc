import React from 'react'
import renderer from 'react-test-renderer'

import { createStore } from 'redux'
import updateEditor from '../redux/reducers/updateEditor'
import { Provider } from 'react-redux'

import CrossUnitsInput from './CrossUnitsInput'

const store = createStore(
  updateEditor
)

it('renders without crashing', () => {
  const tree = renderer
    .create(
    <Provider store={store}>
      <CrossUnitsInput description="description" name="Boil Size" value={20} unit="L" />
    </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders without crashing on US units', () => {


  store.dispatch({
    type: 'UPDATE_UNITS',
    payload: 'english'
  })

  const tree = renderer
    .create(<Provider store={store}>
      <CrossUnitsInput description="description" name="Boil Size" value={20} unit="L" />
    </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})