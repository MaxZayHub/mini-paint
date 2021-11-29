import React, { createContext, useEffect, useState } from 'react'
import { getUsersFromDb } from './context/usersContext'
import { useDispatch } from 'react-redux'
import { getUsers } from './actions-creators/users'
import AppRouter from './components/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { dark, light } from './utils/theme'

interface ThemeContextInterface {
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

export const ThemeContext = createContext<ThemeContextInterface | null>(null)

function App() {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState<boolean>(false)

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
    <ThemeContext.Provider value={{ checked, setChecked }}>
      <ThemeProvider theme={checked ? light : dark}>
        <StyledAdd>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </StyledAdd>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
