import React, { useRef, useState } from 'react'
import Flex from '../styledComponents/Flex'
import PaintTools from './PaintTools'
import PaintCanvas from './PaintCanvas'
import { PaintData } from '../types/paintData'

const Paint = () => {
  const canvasRef = useRef(null)

  const [paintData, setPaintData] = useState<PaintData>({
    pencil: true,
    color: '#000000',
    pencilWidth: '6',
    eraser: false,
    rectangle: false,
    circle: false,
    line: false,
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
      <PaintTools
        canvasRef={canvasRef}
        paintData={paintData}
        setPaintData={setPaintHandler}
      />

      <PaintCanvas
        canvasRef={canvasRef}
        paintData={paintData}
        setPaintData={setPaintHandler}
      />
    </Flex>
  )
}

export default Paint
