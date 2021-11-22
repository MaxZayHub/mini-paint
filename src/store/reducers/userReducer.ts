import { UserAction, UserState } from '../../types/user'

const GET_CURRENT_USER = 'GET_CURRENT_USER'

const initialState = {
  user: {}
}

export const userReducer = (state = initialState, action: UserAction) : UserState => {
  switch (action.type) {
    case GET_CURRENT_USER :
      return  {user: action.payload}
    default:
      return  state
  }
}