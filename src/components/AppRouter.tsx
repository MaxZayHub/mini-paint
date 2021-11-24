import React from 'react'
import { useTypeSelector } from '../hooks/useTypeSelector'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'

const AppRouter = () => {
  const user = useTypeSelector((state) => state.user.user)

  let userIsLogin = user.id !== ''

  return <>{userIsLogin ? <PrivateRouter /> : <PublicRouter />}</>
}

export default AppRouter
