import React from 'react'
import Flex from '../styledComponents/Flex'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { Image } from '../types/image'
import styled from 'styled-components'
import { User } from '../types/user'

interface  Props {
  image: Image
}

const StyledImageBlock = styled.div`
  background-color: ${props => props.theme.colors.imageFeedBackground};
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`

const ImageBackground = styled.div`
  background-color: white;
  width: 80%;
  height: 60%;
`

const StyledUsername = styled.h3`
  align-self: start;
  margin: 10px 0 0 10px;
  color: white;
`


const ImageBlock = (props: Props) => {
  const users = useTypeSelector((state) => state.users.users) as User[]
  const user = users.find((user:User) => user.id === props.image.userId)

  return (
    <StyledImageBlock>
      {user &&
        <Flex width={'100%'} flexDirection={'column'} alignItems={'center'} gap={'10px'} justifyContent={'space-around'} margin={'0 0 20px 0'}>
          <StyledUsername>{user.username}</StyledUsername>
          <ImageBackground>
            <img src={props.image.image} width={'80%'} height={'60%'} alt={'user project'}/>
          </ImageBackground>
        </Flex>}
    </StyledImageBlock>
  )
}

export default ImageBlock