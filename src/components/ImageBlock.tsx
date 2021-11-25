import React from 'react'
import Flex from '../styledComponents/Flex'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { Image } from '../types/image'
import styled from 'styled-components'
import { User } from '../types/user'

interface  Props {
  image: Image
}

const StyledImageBlock = styled.image`
  background-color: rgb(232,76,61);
  border-radius: 10px;
`

const StyledUsername = styled.h3`
  margin: 0;
  align-self: start;
`



const ImageBlock = (props: Props) => {
  const users = useTypeSelector((state) => state.users.users) as User[]

  const user = users.find((user:User) => user.id === props.image.userId)

  return (
    <StyledImageBlock>
      {user &&
        <Flex width={'100%'} flexDirection={'column'} alignItems={'center'}>
          <StyledUsername>{user.username}</StyledUsername>
          <img src={props.image.image} width={'80%'} height={'60%'} alt={'user project'}/>
        </Flex>}
    </StyledImageBlock>
  )
}

export default ImageBlock