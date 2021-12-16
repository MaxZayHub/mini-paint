import React, { createContext, useEffect, useState } from 'react'
import { getUsersFromDb } from './context/usersContext'
import { useDispatch } from 'react-redux'
import { getUsers } from './actions-creators/users'
import AppRouter from './components/AppRouter/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { dark, light } from './utils/theme'

interface ThemeContextInterface {
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

const StyledApp = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.appBackground};
  `

export const ThemeContext = createContext<ThemeContextInterface | null>(null)

function App() {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState<boolean>(false)

  useEffect(() => {
    getUsersFromDb().then((res) => {
      dispatch(getUsers(res))
    })
  }, [dispatch])

  return (
    <ThemeContext.Provider value={{ checked, setChecked }}>
      <ThemeProvider theme={checked ? light : dark}>
        <StyledApp>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </StyledApp>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
