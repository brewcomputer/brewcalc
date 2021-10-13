import React from "react";
import { Container } from "react-bootstrap";
import Recipe from "../components/Recipe";
import ImportArea from "./ImportArea";
import EditorContainer from "./EditorContainer";

import { connect } from "react-redux";

const PageRecipe = ({ editorState }) => {
  const tryParse = (editorState) => {
    try {
      return JSON.parse(editorState);
    } catch (error) {
      return null;
    }
  };
  return (
    <Container>
      <ImportArea />
      <Recipe {...tryParse(editorState)} />
      <EditorContainer />
    </Container>
  );
};

const mapStateToProps = ({ editorState }) => ({ editorState });

export default connect(mapStateToProps)(PageRecipe);
