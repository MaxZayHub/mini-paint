import React from 'react'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import PrivateRouter from '../PrivateRouter/PrivateRouter'
import PublicRouter from '../PublicRouter/PublicRouter'
import NavBar from '../NavBar/NavBar'

const AppRouter = () => {
  const user = useTypeSelector((state) => state.user.user)

  return <>
    <NavBar />
    {!!user.id ? <PrivateRouter /> : <PublicRouter />}
  </>
}

export default AppRouter
