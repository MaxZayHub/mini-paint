import React from 'react'
import styled from 'styled-components'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { useDispatch } from 'react-redux'
import { getCurrentUser } from '../actions-creators/user'

const StyledNavBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgb(232, 76, 61);
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

const StyledButton = styled.button`
  width: auto;
  height: 50%;
  background-color: white;
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
  const currentUser = useTypeSelector((state) => state.user.user)

  const isUserLogin = currentUser.email !== ''

  const dispatch = useDispatch()

  const logOutHandler = () => {
    dispatch(getCurrentUser({ id: '', username: '', password: '', email: '' }))
  }

  return (
    <StyledNavBar>
      {isUserLogin && (
        <StyledBlock>
          <StyledUserName>{currentUser.username}</StyledUserName>
          <StyledButton onClick={logOutHandler}>Log out</StyledButton>
        </StyledBlock>
      )}
    </StyledNavBar>
  )
}

export default NavBar
