import team_json from '../data/team.json'
import { ADD_PEOPLE, REMOVE_PEOPLE } from '../actions/index'
import { createCharacter } from './helpers';

function team(state = team_json, action) {
  switch (action.type) {
    case ADD_PEOPLE:
      let people = state.filter(item => item.id !== action.id)
      return people
    case REMOVE_PEOPLE:
      people = [...state, createCharacter(action.id)]
      return people
    default:
      return state
  }
}

export default team