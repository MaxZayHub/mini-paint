export interface UserState {
  user: User;
}

export interface UserAction {
  type: string;
  payload?: any;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}
