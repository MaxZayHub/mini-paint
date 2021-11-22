import { User } from '../types/user'


export const getCurrentUser = (user: User) => {
  return {
    type: 'GET_CURRENT_USER',
    payload: user
  }
}