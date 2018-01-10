export const ADD_PEOPLE = 'ADD_PEOPLE'
export const REMOVE_PEOPLE = 'REMOVE_PEOPLE'

export function addTeamById(id) {
  const action = {
    type: ADD_PEOPLE,
    id: id // You can use just 'id'
  }
  return action
}

export function removeTeamById(id){
  const action = {
    type: REMOVE_PEOPLE,
    id
  }
  return action
}