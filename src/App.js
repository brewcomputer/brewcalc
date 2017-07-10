import React from 'react';
import Recipe from './Recipe'
import { recipe } from './lib/tests/data/AussieAle.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Recipe recipe={recipe} />
      </div>
    );
  }
}

export default App;
