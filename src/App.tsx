import React, { useEffect } from 'react'
import { getUsersFromDb } from './context/usersContext'
import { useDispatch } from 'react-redux'
import { getUsers } from './actions-creators/users'
import AppRouter from './components/AppRouter'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getUsersFromDb().then((res) => {
      dispatch(getUsers(res))
    })
  }, [])

  return (
    <div className={'App'}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export default App
