import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { usersReducer } from './usersReducer'
import { imagesReducer } from './imagesReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  images: imagesReducer,
})

export type RootState = ReturnType<typeof rootReducer>
