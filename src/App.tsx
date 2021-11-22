import React, { useEffect } from 'react'
import Registration from './components/Registration'
import Login from './components/Login'
import { getUsersFromDb } from './context/usersContext'
import { useDispatch } from 'react-redux'
import { getUsers } from './actions-creators/users'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getUsersFromDb().then((res) => {
      dispatch(getUsers(res))
    })
  }, [])

  return (
    <div className={'App'}>
      <Registration />
    </div>
  )
}

export default App
