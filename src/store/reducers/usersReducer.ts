import { UsersAction, UsersState } from '../../types/users'

const GET_USERS = 'GET_USERS'

const initialState: UsersState = {
  users: [],
}

export const usersReducer = (
  state = initialState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case GET_USERS:
      return { users: action.payload }
    default:
      return state
  }
}
