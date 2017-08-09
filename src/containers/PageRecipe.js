import React from 'react'
import { Grid } from 'react-bootstrap'
import Recipe from '../components/Recipe'
import ImportArea from './ImportArea'
import EditorContainer from './EditorContainer'

import { connect } from 'react-redux'

const PageRecipe = ({ editorState }) => {
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
      <Recipe {...tryParse(editorState)} />
      <EditorContainer />
    </Grid>
  )
}

const mapStateToProps = ({ editorState }) => ({ editorState })

export default connect(mapStateToProps)(PageRecipe)
