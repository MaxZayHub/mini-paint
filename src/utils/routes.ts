import { LOGIN_ROUTE, MAIN_ROUTE, REGISTER_ROUTE } from './consts'
import Login from '../components/Login'
import Registration from '../components/Registration'
import Main from '../components/Main'

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login
  },
  {
    path: REGISTER_ROUTE,
    Component: Registration
  }
]

export const privateRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main
  }
]