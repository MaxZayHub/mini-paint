import React, { useRef, useState } from 'react'
import StyledCanvas from '../styledComponents/StyledCanvas'
import { PaintData } from '../types/paintData'

interface Props {
  setPaintData: (paintObject: PaintData) => void;
  paintData: PaintData;
}

const PaintCanvas = (props: Props) => {
  const canvasRef = useRef(null)

  let ctx: CanvasRenderingContext2D | null = null

  if (canvasRef.current) {
    ctx = (canvasRef.current as HTMLCanvasElement).getContext('2d')
    if (ctx) {
      ctx.lineWidth = parseInt(props.paintData.pencilWidth, 10)
      ctx.strokeStyle = props.paintData.color
    }
  }

  const [mouseDown, setMouseDown] = useState(false)

  const mouseDownHandler = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const target = event.target as HTMLCanvasElement
    setMouseDown((mouseDown) => true)
    ctx?.beginPath()
    ctx?.moveTo(event.pageX - target.offsetLeft, event.pageY - target.offsetTop)
  }

  const mouseUpHandler = () => {
    setMouseDown((mouseDown) => false)
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
      if (canvasRef.current) {
        let current = canvasRef.current as HTMLCanvasElement
        ctx = current.getContext('2d')
        if (ctx) {
       //   ctx.beginPath()
      //    ctx.moveTo(event.pageX - target.offsetLeft, event.pageY - target.offsetTop)
         // draw(event.pageX - target.offsetLeft, event.pageY - target.offsetTop)
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
        ref={canvasRef}
        width={800}
        height={600}
      />
    </StyledCanvas>
  )
}

export default PaintCanvas
