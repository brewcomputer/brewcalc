import { recipe } from '../../data/recipe'
import { equipment } from '../../data/equipment'

const defaultState = {
  units: 'metric',
  editorState: JSON.stringify({ recipe, equipment }, null, 4)
}

const updateEditor = (state = defaultState, { payload, type }) => {
  if (type === 'UPDATE_EDITOR_STATE') {
    return {
      ...state,
      editorState: payload
    }
  }
  if (type === 'UPDATE_UNITS') {
    return {
      ...state,
      units: payload
    }
  }
  return state
}

export const persistedState = localStorage.getItem('brewCalcState')
  ? JSON.parse(localStorage.getItem('brewCalcState'))
  : defaultState

export default updateEditor
