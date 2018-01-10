import team_json from '../data/team.json'

export function createCharacter(id){
  let character = team_json.find(c => c.id === id)
  return character
}