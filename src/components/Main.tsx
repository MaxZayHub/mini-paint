import React from 'react'
import Flex from '../styledComponents/Flex'
import Paint from './Paint'

const Main = () => {
  return (
    <Flex width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'center'}>
      <Paint />
    </Flex>
  )
}

export default Main