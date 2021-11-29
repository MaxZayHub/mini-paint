import React, { useContext } from 'react'
import styled from 'styled-components'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { useDispatch } from 'react-redux'
import { getCurrentUser } from '../actions-creators/user'
import Switch from 'react-switch'
import moon from '../assets/moon.png'
import sun from '../assets/sun.png'
import Flex from '../styledComponents/Flex'
import { ThemeContext } from '../App'

const StyledNavBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.navBarBackground};
  position: absolute;
  top: 0;
`

const StyledUserName = styled.div`
  user-select: none;
  margin: 0;
  color: white;
  font-size: 18px;
`

const StyledBlock = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  height: 100%;
  float: right;
  margin-right: 1%;
`

const StyledSwitch = styled.div`
  float: right;
  margin-right: 20px;
  margin-top: 3px;
`

const StyledButton = styled.button`
  width: auto;
  height: 50%;
  background-color: ${(props) => props.theme.colors.logOutButtonBackground};
  color: rgb(232, 76, 61);
  outline: none;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`

const NavBar = () => {
  const themeContext = useContext(ThemeContext)
  const currentUser = useTypeSelector((state) => state.user.user)
  const isUserLogin = currentUser.email !== ''
  const dispatch = useDispatch()

  const logOutHandler = () => {
    dispatch(getCurrentUser({ id: '', username: '', password: '', email: '' }))
  }

  const switchOnChangeHandler = () => {
    themeContext?.setChecked(!themeContext?.checked)
  }
  console.log(themeContext?.checked)

  return (
    <StyledNavBar>
      <StyledBlock>
        <StyledSwitch>
          {themeContext && (
            <Switch
              onColor={'#b65151'}
              onChange={switchOnChangeHandler}
              checked={themeContext?.checked}
              uncheckedIcon={
                <Flex
                  width={'100%'}
                  height={'100%'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <img src={moon} alt={'dark mode'} width={20} height={20} />
                </Flex>
              }
              checkedIcon={
                <Flex
                  width={'100%'}
                  height={'100%'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <img src={sun} alt={'light mode'} width={20} height={20} />
                </Flex>
              }
            />
          )}
        </StyledSwitch>
        {isUserLogin && (
          <>
            <StyledUserName>{currentUser.username}</StyledUserName>
            <StyledButton onClick={logOutHandler}>Log out</StyledButton>
          </>
        )}
      </StyledBlock>
    </StyledNavBar>
  )
}

export default NavBar
