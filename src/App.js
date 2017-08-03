import React from 'react'
import { FormGroup, FormControl, Grid, Row, Col, Panel } from 'react-bootstrap'

import { recipeOne as recipe } from './lib/tests/data/GenericOneHF.js'
import { equipment } from './lib/tests/data/Pot50L.js'

import { importFromBeerXml } from './lib/importFromBeerXml'

import Stats from './components/Stats'
import StatsWater from './components/StatsWater'

import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/github'

const defaultState = {
  editorState: JSON.stringify({ recipe, equipment }, null, 4)
}

const reducer = (state = defaultState, { payload, type }) => {
  if (type === 'UPDATE_EDITOR_STATE') {
    return {
      ...state,
      editorState: payload
    }
  }
  return state
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const JsonEditor = ({ editorState, onSaveEditorState }) => {
  const tryParse = editorState => {
    try {
      return JSON.parse(editorState)
    } catch (error) {
      return null
    }
  }

  const onXmlLoaded = e => {
    const reader = new FileReader()
    reader.readAsText(e.target.files[0])
    reader.onloadend = function () {
      const result = importFromBeerXml(reader.result)
      onSaveEditorState(
        JSON.stringify(
          { recipe: result.recipe, equipment: result.equipment },
          null,
          4
        )
      )
    }
  }
  return (
    <Grid>

      <Panel header="Upload from BeerXML">
        <FormGroup>
          <FormControl
            id="formControlsFile"
            type="file"
            label="File"
            onChange={onXmlLoaded}
          />
        </FormGroup>
      </Panel>
      <Row className="show-grid">
        <Col md={6}>
          <AceEditor
            mode="javascript"
            theme="github"
            onChange={onSaveEditorState}
            value={editorState}
            width="100%"
            maxLines="500"
            editorProps={{ $blockScrolling: Infinity }}
          />
        </Col>
        {tryParse(editorState) !== null
          ? <Col md={6}>
            <Stats {...tryParse(editorState) } />
            <StatsWater {...tryParse(editorState) } />
          </Col>
          : <Col md={6}>
            <Panel header="SyntaxError in JSON" />
          </Col>}
      </Row>
    </Grid>
  )
}

const mapStateToProps = ({ editorState }) => ({ editorState })

const mapDispatchToProps = dispatch => ({
  onSaveEditorState: editorState => {
    dispatch({
      type: 'UPDATE_EDITOR_STATE',
      payload: editorState
    })
  }
})

const JsonRecipeCalc = connect(mapStateToProps, mapDispatchToProps)(JsonEditor)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <JsonRecipeCalc />
        </div>
      </Provider>
    )
  }
}

export default App
