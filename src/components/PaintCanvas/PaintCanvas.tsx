import React, { useCallback} from 'react'
import { Pencil } from '../../utils/canvas/Pencil'
import { PaintCanvasPropsInterface } from './PaintCanvas.interface'
import { Styles } from './PaintCanvas.styles'

const PaintCanvas = (props: PaintCanvasPropsInterface) => {
  const measureRef = useCallback(node => {
    if (node) {
      props.setCanvasObj(new Pencil(node as HTMLCanvasElement, '#000000', 6))
    }
  },[])

  return (
    <Styles.StyledCanvas>
      <Styles.Canvas
        style={{backgroundColor: 'white'}}
        onMouseUp={props.canvasObj?.mouseUpHandler.bind(props.canvasObj)}
        onMouseDown={props.canvasObj?.mouseDownHandler.bind(props.canvasObj)}
        onMouseMove={props.canvasObj?.mouseMoveHandler.bind(props.canvasObj)}
        onMouseOut={props.canvasObj?.mouseOutHandler.bind(props.canvasObj)}
        ref={measureRef}
        width={700}
        height={500}
      />
    </Styles.StyledCanvas>
  )
}

export default PaintCanvas