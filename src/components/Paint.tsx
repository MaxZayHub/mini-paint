import React, { useState } from 'react'
import Flex from '../styledComponents/Flex'
import PaintTools from './PaintTools'
import PaintCanvas from './PaintCanvas'
import { Link } from 'react-router-dom'
import { Canvas } from '../utils/canvas/canvas'

const Paint = () => {
  const [canvasObj, setCanvasObj] = useState<Canvas | null>(null)

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
