import React from 'react'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { User } from '../../types/user'
import { ImageBlockPropsInterface } from './ImageBlock.interface'
import { Styles } from './ImageBlock.styles'

const ImageBlock = (props: ImageBlockPropsInterface) => {
  const users = useTypeSelector((state) => state.users.users) as User[]
  const user = users.find((user:User) => user.id === props.image.userId)

  return (
    <Styles.StyledImageBlock>
      {user &&
        <Styles.ImageWrapper>
          <Styles.StyledUsername>{user.username}</Styles.StyledUsername>
          <Styles.ImageBackground>
            <img src={props.image.image} width={'80%'} height={'60%'} alt={'user project'}/>
          </Styles.ImageBackground>
        </Styles.ImageWrapper>}
    </Styles.StyledImageBlock>
  )
}

export default ImageBlock