import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import PageRecipe from './containers/PageRecipe'
import updateEditor from './redux/reducers/updateEditor'
import { persistedState } from './redux/reducers/updateEditor'

const store = createStore(
  updateEditor,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
store.subscribe(() => {
  localStorage.setItem('brewCalcState', JSON.stringify(store.getState()))
})

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PageRecipe />
        </div>
      </Provider>
    )
  }
}

export default App
