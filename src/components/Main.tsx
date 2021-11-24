import React from 'react'
import Flex from '../styledComponents/Flex'
import Paint from './Paint'
import ImageFeed from './ImageFeed'

const Main = () => {
  return (
    <Flex
      width={'100%'}
      height={'100%'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <ImageFeed />
    </Flex>
  )
}

export default Main
