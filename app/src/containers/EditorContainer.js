import React from "react";
import { Accordion } from "react-bootstrap";
import { connect } from "react-redux";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/mode-json";

//TODO:
//https://github.com/securingsincity/react-ace/issues/240

const EditorContainer = ({ editorState, onContentUpdate }) => (
  <Accordion>
    <Accordion.Toggle eventKey="1">
      &#8680; Expand and edit recipe and equipment JSON
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <AceEditor
        mode="json"
        theme="github"
        onChange={onContentUpdate}
        value={editorState}
        width="100%"
        maxLines={100}
        editorProps={{ $blockScrolling: Infinity }}
      />
    </Accordion.Collapse>
  </Accordion>
);

const mapStateToProps = ({ editorState }) => ({ editorState });

const mapDispatchToProps = (dispatch) => ({
  onContentUpdate: (editorState) => {
    dispatch({
      type: "UPDATE_EDITOR_STATE",
      payload: editorState,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer);
