import React from 'react'
import { Editor, EditorState, ContentState } from 'draft-js'
import {
  FormGroup,
  FormControl,
  Grid,
  Row,
  Col,
  Tabs,
  Tab
} from 'react-bootstrap'

import { recipeOne as recipe } from './lib/tests/data/GenericOneHF.js'
import { equipment } from './lib/tests/data/Pot50L.js'

import { importFromBeerXml } from './lib/importFromBeerXml'

import RecipeSpecs from './components/RecipeSpecs'
import Fermentables from './components/Fermentables'
import Hops from './components/Hops'
import Yeasts from './components/Yeasts'
import Equipment from './components/Equipment'
import Stats from './components/Stats'
import StatsWater from './components/StatsWater'

class App extends React.Component {
  constructor(props) {
    super(props)

    const initialEquipmentEditorState = ContentState.createFromText(
      JSON.stringify(equipment, null, 4)
    )
    const initialRecipeEditorState = ContentState.createFromText(
      JSON.stringify(recipe, null, 4)
    )

    this.state = {
      equipmentEditorState: EditorState.createWithContent(
        initialEquipmentEditorState
      ),
      recipeEditorState: EditorState.createWithContent(initialRecipeEditorState)
    }
    this.onRecipeChange = recipeEditorState =>
      this.setState({ recipeEditorState })

    this.onEquipmentChange = equipmentEditorState =>
      this.setState({ equipmentEditorState })

    this.onXmlLoaded = e => {
      const reader = new FileReader()
      reader.readAsText(e.target.files[0])
      const self = this
      reader.onloadend = function() {
        const equipmentEditorContentState = ContentState.createFromText(
          JSON.stringify(importFromBeerXml(reader.result).equipment, null, 4)
        )
        const recipeEditorContentState = ContentState.createFromText(
          JSON.stringify(importFromBeerXml(reader.result).recipe, null, 4)
        )

        const equipmentEditorState = EditorState.createWithContent(
          equipmentEditorContentState
        )
        const recipeEditorState = EditorState.createWithContent(
          recipeEditorContentState
        )

        self.setState({ recipeEditorState })
        self.setState({ equipmentEditorState })
      }
    }

    this.getRecipe = () =>
      JSON.parse(
        this.state.recipeEditorState.getCurrentContent().getPlainText()
      )

    this.getEquipment = () =>
      JSON.parse(
        this.state.equipmentEditorState.getCurrentContent().getPlainText()
      )
  }
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">

            <FormGroup>
              <FormControl
                id="formControlsFile"
                type="file"
                label="File"
                onChange={this.onXmlLoaded}
              />
            </FormGroup>
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Recipe">
                <Col md={6}>
                  <Editor
                    editorState={this.state.recipeEditorState}
                    onChange={this.onRecipeChange}
                  />
                </Col>
                <Col md={6}>
                  <RecipeSpecs {...this.getRecipe()} />
                  <Fermentables {...this.getRecipe()} />
                  <Hops {...this.getRecipe()} />
                  <Yeasts {...this.getRecipe()} />
                </Col>
              </Tab>
              <Tab eventKey={2} title="Equipment">
                <Col md={6}>
                  <Editor
                    editorState={this.state.equipmentEditorState}
                    onChange={this.onEquipmentChange}
                  />
                </Col>
                <Col md={6}>
                  <Equipment {...this.getEquipment()} />
                </Col>
              </Tab>
            </Tabs>
          </Row>
          <Stats recipe={this.getRecipe()} equipment={this.getEquipment()} />
          <StatsWater
            recipe={this.getRecipe()}
            equipment={this.getEquipment()}
          />

        </Grid>
      </div>
    )
  }
}

export default App
