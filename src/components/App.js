import React from 'react';
import './App.css';

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Switch, Route, Redirect } from 'react-router'

import PageRecipes from './PageRecipes'
import PageNotFound from './PageNotFound'

import PropTypes from 'prop-types'

const App = ({ history, store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="app">
        <div className="app__layout">
          <Switch>
            <Route
              exact={true}
              path="/"
              render={() => <Redirect to="/recipes" />}
            />
            <Route exact={true} path="/recipes" component={PageRecipes} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>
)

App.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
}

export default App;
