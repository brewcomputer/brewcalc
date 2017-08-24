import React from 'react'
import { Panel, Accordion } from 'react-bootstrap'
import { connect } from 'react-redux'

import AceEditor from 'react-ace'
import 'brace/theme/github'
//TODO:
//https://github.com/securingsincity/react-ace/issues/240
import 'brace/mode/json'

const EditorContainer = ({ editorState, onContentUpdate }) => (
  <Accordion>
    <Panel header="Edit recipe and equipment JSON" eventKey="1">
      <AceEditor
        mode="json"
        theme="github"
        onChange={onContentUpdate}
        value={editorState}
        width="100%"
        maxLines={100}
        editorProps={{ $blockScrolling: Infinity }}
      />
    </Panel>
  </Accordion>
)

const mapStateToProps = ({ editorState }) => ({ editorState })

const mapDispatchToProps = dispatch => ({
  onContentUpdate: editorState => {
    dispatch({
      type: 'UPDATE_EDITOR_STATE',
      payload: editorState
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer)
