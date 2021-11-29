import React, { useCallback} from 'react'
import StyledCanvas from '../styledComponents/StyledCanvas'
import { Canvas } from '../utils/canvas/canvas'
import { Pencil } from '../utils/canvas/Pencil'

interface Props {
  canvasObj: Canvas | null
  setCanvasObj: (obj: Canvas) => void
}


const PaintCanvas = (props: Props) => {
  const measureRef = useCallback(node => {
    if (node) {
      props.setCanvasObj(new Pencil(node as HTMLCanvasElement, '#000000', 6))
    }
  },[])

  return (
    <StyledCanvas width={'700px'} height={'500px'}>
      <canvas
        style={{backgroundColor: 'white'}}
        onMouseUp={props.canvasObj?.mouseUpHandler.bind(props.canvasObj)}
        onMouseDown={props.canvasObj?.mouseDownHandler.bind(props.canvasObj)}
        onMouseMove={props.canvasObj?.mouseMoveHandler.bind(props.canvasObj)}
        onMouseOut={props.canvasObj?.mouseOutHandler.bind(props.canvasObj)}
        ref={measureRef}
        width={700}
        height={500}
      />
    </StyledCanvas>
  )
}

export default PaintCanvas