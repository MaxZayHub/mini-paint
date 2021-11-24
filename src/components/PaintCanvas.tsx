import React, { useState } from 'react'
import StyledCanvas from '../styledComponents/StyledCanvas'
import { PaintData } from '../types/paintData'

interface Props {
  setPaintData: (paintObject: PaintData) => void;
  paintData: PaintData;
  canvasRef: React.MutableRefObject<null>,
}

const PaintCanvas = (props: Props) => {

  let ctx: CanvasRenderingContext2D | null = null

  if (props.canvasRef.current) {
    ctx = (props.canvasRef.current as HTMLCanvasElement).getContext('2d')
    if (ctx) {
      if (props.paintData.eraser) {
        ctx.lineWidth = parseInt(props.paintData.pencilWidth, 10)
        ctx.strokeStyle = '#ffffff'
      } else {
        ctx.lineWidth = parseInt(props.paintData.pencilWidth, 10)
        ctx.strokeStyle = props.paintData.color
      }
    }
  }

  const [mouseDown, setMouseDown] = useState(false)

  const mouseDownHandler = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const target = event.target as HTMLCanvasElement
    setMouseDown(true)
    ctx?.beginPath()
    ctx?.moveTo(event.pageX - target.offsetLeft, event.pageY - target.offsetTop)
  }

  const mouseUpHandler = () => {
    setMouseDown(false)
  }

  const onMouseOutHandler = () => {
    setMouseDown( false)
  }

  const draw = (x: number, y: number) => {
    if (ctx) {
      ctx.lineTo(x, y)
      ctx.stroke()
    }
  }

  const mouseMoveHandler = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const target = event.target as HTMLCanvasElement
    if (mouseDown) {
      if (props.canvasRef.current) {
        let current = props.canvasRef.current as HTMLCanvasElement
        ctx = current.getContext('2d')
        if (ctx) {
          draw(event.pageX - target.offsetLeft, event.pageY - target.offsetTop)
        }
      }
    }
  }

  return (
    <StyledCanvas width={'800px'} height={'600px'}>
      <canvas
        onMouseUp={mouseUpHandler}
        onMouseDown={mouseDownHandler}
        onMouseMove={mouseMoveHandler}
        onMouseOut={onMouseOutHandler}
        ref={props.canvasRef}
        width={800}
        height={600}
      />
    </StyledCanvas>
  )
}

export default PaintCanvas
