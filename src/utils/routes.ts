import { LOGIN_ROUTE, MAIN_ROUTE, REGISTER_ROUTE, NEW_PICTURE } from '../consts/routes'
import Login from '../components/Login/Login'
import Registration from '../components/Registration/Registration'
import Main from '../components/Main/Main'
import Paint from '../components/Paint/Paint'

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: REGISTER_ROUTE,
    Component: Registration,
  },
]

export const privateRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: NEW_PICTURE,
    Component: Paint,
  },
]
