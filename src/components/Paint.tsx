import React, { useState } from 'react'
import Flex from '../styledComponents/Flex'
import PaintTools from './PaintTools'
import PaintCanvas from './PaintCanvas'
import { PaintData } from '../types/paintData'

const Paint = () => {
  const [paintData, setPaintData] = useState<PaintData>({
    pencil: true,
    color: '#3d34a5',
    pencilWidth: '10',
  })

  const setPaintHandler = (paintObject: PaintData) => {
    setPaintData((paintData) => ({ ...paintData, ...paintObject }))
  }

  return (
    <Flex
      flexDirection={'column'}
      width={'80%'}
      alignItems={'center'}
      gap={'20px'}
    >
      <PaintTools paintData={paintData} setPaintData={setPaintHandler} />
      <PaintCanvas paintData={paintData} setPaintData={setPaintHandler} />
    </Flex>
  )
}

export default Paint
