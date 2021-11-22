export interface UserState {
  user: {}
}

export interface UserAction {
  type: string,
  payload?: any
}

export interface User {
  id: string,
  username: string,
  email: string,
  password: string
}