import React from 'react'
import { FormGroup, FormControl, Panel, Row, Col } from 'react-bootstrap'
import { importFromBeerXml } from '../lib/importFromBeerXml'
import { connect } from 'react-redux'

const ImportArea = ({ editorState, onReloadEditorState }) => {
  const onXmlLoaded = e => {
    const reader = new FileReader()
    reader.readAsText(e.target.files[0])
    reader.onloadend = function() {
      const result = importFromBeerXml(reader.result)
      onReloadEditorState(
        JSON.stringify(
          { recipe: result.recipe, equipment: result.equipment },
          null,
          4
        )
      )
    }
  }

  return (
    <Row className="show-grid">
      <Col md={6}>
        <Panel header="Upload from BeerXML">
          <FormGroup>
            <FormControl
              id="formControlsFile"
              type="file"
              label="File"
              accept="application/xml"
              onChange={onXmlLoaded}
            />
          </FormGroup>
        </Panel>
      </Col>
      <Col md={6}>
        <Panel header="Or grab recipe from GitHub">
          Here will be handy button to import your recipe from GitHub soon.
        </Panel>
      </Col>
    </Row>
  )
}

const mapStateToProps = ({ editorState }) => ({ editorState })

const mapDispatchToProps = dispatch => ({
  onReloadEditorState: editorState => {
    dispatch({
      type: 'UPDATE_EDITOR_STATE',
      payload: editorState
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ImportArea)
