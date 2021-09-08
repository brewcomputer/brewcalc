import React from "react";
import { FormGroup, FormControl, Card, Row, Col } from "react-bootstrap";
import importFromBeerXml from "@beerjson/beerjson/js/beerxml-to-beerjson";
import { connect } from "react-redux";

const ImportArea = ({ editorState, onReloadEditorState }) => {
  const onXmlLoaded = (e) => {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onloadend = function () {
      try {
        const result = importFromBeerXml(reader.result);
        onReloadEditorState(
          JSON.stringify(
            { recipe: result.recipe, equipment: result.equipment },
            null,
            4
          )
        );
      } catch (err) {
        alert("Can't import from BeerXML, see console for the details");
      }
    };
  };

  return (
    <Row className="show-grid">
      <Col md={6}>
        <Card>
          <Card.Header>Upload BeerXML file</Card.Header>
          <Card.Body>
            <FormGroup>
              <FormControl
                id="formControlsFile"
                type="file"
                label="File"
                accept="application/xml"
                onChange={onXmlLoaded}
              />
            </FormGroup>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Header>brewcalc</Card.Header>
          <Card.Body>
            <div>
              A modern (ES6) functional JavaScript library for brewing
              calculations.
            </div>
            <a href="https://github.com/brewcomputer/brewcalc">
              brewcalc lib on the GitHub (MIT license)
            </a>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ editorState }) => ({ editorState });

const mapDispatchToProps = (dispatch) => ({
  onReloadEditorState: (editorState) => {
    dispatch({
      type: "UPDATE_EDITOR_STATE",
      payload: editorState,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ImportArea);
