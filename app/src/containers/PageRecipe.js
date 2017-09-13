import React from 'react'
import { Grid } from 'react-bootstrap'
import Recipe from '../components/Recipe'
import ImportArea from './ImportArea'
import EditorContainer from './EditorContainer'

import { connect } from 'react-redux'

const PageRecipe = ({ editorState, units }) => {
  const tryParse = editorState => {
    try {
      return JSON.parse(editorState)
    } catch (error) {
      return null
    }
  }
  return (
    <Grid>
      <ImportArea />
      <div>
        UNITS {units}
      </div>
      <Recipe {...tryParse(editorState) } />
      <EditorContainer />
    </Grid>
  )
}

const mapStateToProps = ({ editorState, units }) => ({ editorState, units })

export default connect(mapStateToProps)(PageRecipe)
