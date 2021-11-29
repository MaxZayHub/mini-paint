import React, { useEffect } from 'react'
import { getUsersFromDb } from './context/usersContext'
import { useDispatch } from 'react-redux'
import { getUsers } from './actions-creators/users'
import AppRouter from './components/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { dark, light } from './utils/theme'

function App() {
  const dispatch = useDispatch()

  const StyledAdd = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.appBackground};
  `

  useEffect(() => {
    getUsersFromDb().then((res) => {
      dispatch(getUsers(res))
    })
  }, [])

  return (
    <ThemeProvider theme={dark}>
      <StyledAdd>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </StyledAdd>
    </ThemeProvider>
  )
}

export default App
