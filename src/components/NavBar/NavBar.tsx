import React, { useContext } from 'react'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { useDispatch } from 'react-redux'
import { getCurrentUser } from '../../actions-creators/user'
import Switch from 'react-switch'
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png'
import { ThemeContext } from '../../App'
import { Styles } from './NavBar.styles'

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

  return (
    <Styles.StyledNavBar>
      <Styles.StyledBlock>
        <Styles.StyledSwitch>
          {themeContext && (
            <Switch
              onColor={'#b65151'}
              onChange={switchOnChangeHandler}
              checked={themeContext?.checked}
              uncheckedIcon={
                <Styles.Flex>
                  <img src={moon} alt={'dark mode'} width={20} height={20} />
                </Styles.Flex>
              }
              checkedIcon={
                <Styles.Flex>
                  <img src={sun} alt={'light mode'} width={20} height={20} />
                </Styles.Flex>
              }
            />
          )}
        </Styles.StyledSwitch>
        {isUserLogin && (
          <>
            <Styles.StyledUserName>{currentUser.username}</Styles.StyledUserName>
            <Styles.StyledButton onClick={logOutHandler}>Log out</Styles.StyledButton>
          </>
        )}
      </Styles.StyledBlock>
    </Styles.StyledNavBar>
  )
}

export default NavBar
