import React, { useState } from 'react'
import Flex from '../styledComponents/Flex'
import PaintTools from './PaintTools'
import PaintCanvas from './PaintCanvas'

interface PaintData {
  pencil: boolean,
  color: string,
  pencilWidth: string
}

const Paint = () => {
  const [paintData, setPaintData] = useState({
    pencil: true,
    color: 'black',
    pencilWidth: '3'
  })

  const setPaintHandler = (paintObject: PaintData) => {
  //  setPaintData((paintData) => )
  }

  return (
    <Flex flexDirection={'column'} width={'80%'} alignItems={'center'}>
      <PaintTools />
      <PaintCanvas />
    </Flex>
  )
}

export default Paint