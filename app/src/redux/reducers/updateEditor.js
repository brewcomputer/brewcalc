import { recipeOne as recipe } from '../../lib/data/GenericOneHF.js'
import { equipment } from '../../lib/data/Pot50L.js'

const defaultState = {
  editorState: JSON.stringify({ recipe, equipment }, null, 4)
}

const updateEditor = (state = defaultState, { payload, type }) => {
  if (type === 'UPDATE_EDITOR_STATE') {
    return {
      ...state,
      editorState: payload
    }
  }
  return state
}

export const persistedState = localStorage.getItem('brewCalcState')
  ? JSON.parse(localStorage.getItem('brewCalcState'))
  : defaultState

export default updateEditor
