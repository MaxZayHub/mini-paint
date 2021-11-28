import React, { useCallback, useEffect, useRef, useState } from 'react'
import Flex from '../styledComponents/Flex'
import PaintTools from './PaintTools'
import PaintCanvas from './PaintCanvas'
import { PaintData } from '../types/paintData'
import { Link } from 'react-router-dom'
import { Canvas } from '../utils/canvas/canvas'
import { Pencil } from '../utils/canvas/Pencil'
import ReactDOM from 'react-dom'

const Paint = () => {
  const [paintData, setPaintData] = useState<PaintData>({
    pencil: true,
    color: '#000000',
    pencilWidth: '6',
    eraser: false,
    rectangle: false,
    circle: false,
    line: false,
  })

  const [canvasObj, setCanvasObj] = useState<Canvas | null>(null)

  const setPaintHandler = (paintObject: PaintData) => {
    setPaintData((paintData) => ({ ...paintData, ...paintObject }))
  }

  return (
    <Flex
      width={'100%'}
      height={'100%'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Flex
        flexDirection={'column'}
        width={'80%'}
        alignItems={'center'}
        gap={'20px'}
      >
        <PaintTools
          canvasObj={canvasObj}
          setCanvasObj={setCanvasObj}
        />

        <PaintCanvas
          canvasObj={canvasObj}
          setCanvasObj={setCanvasObj}
        />
        <Link to={'/main'}>Back to main</Link>
      </Flex>
    </Flex>
  )
}

export default Paint
