import React from 'react'
import { Editor, EditorState, ContentState } from 'draft-js'
import {
  FormGroup,
  FormControl,
  Grid,
  Row,
  Col,
  Nav,
  NavItem,
  Panel
} from 'react-bootstrap'

import { recipeOne as recipe } from './lib/tests/data/GenericOneHF.js'
import { equipment } from './lib/tests/data/Pot50L.js'

import { importFromBeerXml } from './lib/importFromBeerXml'

import Stats from './components/Stats'
import StatsWater from './components/StatsWater'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedKey: 'recipe',
      equipment: equipment,
      recipe: recipe,
      editorState: EditorState.createWithContent(
        ContentState.createFromText(
          JSON.stringify(recipe, null, 4)
        )
      )
    }

    this.onChange = editorState => {
      try {
        const currentJSON = JSON.parse(
          this.state.editorState.getCurrentContent().getPlainText()
        )
        this.state.selectedKey === 'recipe' ? this.setState({ editorState, recipe: currentJSON }) : this.setState({ editorState, equipment: currentJSON })

      } catch (error) {
        this.setState({ editorState: EditorState.undo(this.state.editorState) })
      }
    }

    this.onXmlLoaded = e => {
      const reader = new FileReader()
      reader.readAsText(e.target.files[0])
      const self = this
      reader.onloadend = function () {
        const result = importFromBeerXml(reader.result)
        self.setState({ equipment: result.equipment, recipe: result.recipe })
        self.setState({
          editorState: EditorState.createWithContent(
            ContentState.createFromText(
              JSON.stringify(self.state[self.state.selectedKey], null, 4)
            )
          )
        })
      }
    }

    this.handleSelect = (selectedKey) => {
      this.setState({
        selectedKey,
        editorState: EditorState.createWithContent(
          ContentState.createFromText(
            JSON.stringify(this.state[selectedKey], null, 4)
          )
        )
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Panel header="Upload from BeerXML">
              <FormGroup>
                <FormControl
                  id="formControlsFile"
                  type="file"
                  label="File"
                  onChange={this.onXmlLoaded}
                />
              </FormGroup>
            </Panel >

            <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
              <NavItem eventKey={'recipe'}>Recipe</NavItem>
              <NavItem eventKey={'equipment'} title="Item">Equipment</NavItem>
            </Nav>
            <Col md={6}>
              <Editor
                editorState={this.state.editorState}
                onChange={this.onChange}
              />
            </Col>
            <Col md={6}>
              <Stats recipe={this.state.recipe} equipment={this.state.equipment} />
              <StatsWater
                recipe={this.state.recipe}
                equipment={this.state.equipment}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App
