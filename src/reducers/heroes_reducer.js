import { ADD_PEOPLE, REMOVE_PEOPLE } from '../actions/index'
import { createCharacter } from './helpers'

function heroes(state = [], action) {
  switch (action.type) {
    case ADD_PEOPLE:
      let heroes = [...state, createCharacter(action.id)]
      return heroes
    case REMOVE_PEOPLE:
      heroes = state.filter(item => item.id !== action.id)
      return heroes
    default:
      return state
  }
}

export default heroes