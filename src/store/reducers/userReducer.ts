import { UserAction, UserState } from '../../types/user'

const GET_USER = 'GET_USER'

const initialState = {
  user: {}
}

export const userReducer = (state = initialState, action: UserAction) : UserState => {
  switch (action.type) {
    case GET_USER :
      return  {user: {}}
    default:
      return  state
  }
}