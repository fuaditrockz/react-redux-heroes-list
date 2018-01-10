import { combineReducers } from 'redux';
import team from './team_reducer'
import heroes from './heroes_reducer'

const rootReducer = combineReducers({
  team,
  heroes
})

export default rootReducer