import React, { useState } from 'react'
import StyledCanvas from '../styledComponents/StyledCanvas'
import { PaintData } from '../types/paintData'

interface Props {
  setPaintData: (paintObject: PaintData) => void;
  paintData: PaintData;
  canvasRef: React.MutableRefObject<null>,
}

interface RectInfo {
  startX: number,
  startY: number,
  imgStr: string,
}

const PaintCanvas = (props: Props) => {
  const [rectInfo, setRectInfo] = useState<RectInfo>({
    startX: 0,
    startY: 0,
    imgStr: ''
  })

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
    if (props.paintData.pencil) {
      ctx?.moveTo(event.pageX - target.offsetLeft, event.pageY - target.offsetTop)
    } else if (props.paintData.rectangle && props.canvasRef.current) {
      setRectInfo(rectInfo => ({...rectInfo,
        imgStr: (props.canvasRef.current as unknown as HTMLCanvasElement).toDataURL(),
        startX: event.pageX - target.offsetLeft,
        startY:  event.pageY - target.offsetTop}))
    }
  }

  const mouseMoveHandler = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const target = event.target as HTMLCanvasElement
    if (mouseDown) {
      if (props.canvasRef.current) {
        let current = props.canvasRef.current as HTMLCanvasElement
        ctx = current.getContext('2d')
        if (ctx) {
          if (props.paintData.pencil || props.paintData.eraser) {
            draw(event.pageX - target.offsetLeft, event.pageY - target.offsetTop)
          } else if (props.paintData.rectangle) {
            let currentX = event.pageX - target.offsetLeft
            let currentY = event.pageY - target.offsetTop
            let currentWidth = currentX - rectInfo.startX
            let currentHeight = currentY - rectInfo.startY
            drawRect(rectInfo.startX, rectInfo.startY, currentWidth, currentHeight)
          }
        }
      }
    }
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

  const drawRect = (x: number, y: number, w: number, h: number) => {
    const canvas = props.canvasRef.current as unknown as HTMLCanvasElement
    const img = new Image()
    img.src = rectInfo.imgStr
    img.onload = () => {
      ctx?.clearRect(0, 0, canvas.width, canvas.height)
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)
      ctx?.beginPath()
      ctx?.rect(x, y, w, h)
      ctx?.stroke()
    }
  }

  return (
    <StyledCanvas width={'700px'} height={'500px'}>
      <canvas
        onMouseUp={mouseUpHandler}
        onMouseDown={mouseDownHandler}
        onMouseMove={mouseMoveHandler}
        onMouseOut={onMouseOutHandler}
        ref={props.canvasRef}
        width={700}
        height={500}
      />
    </StyledCanvas>
  )
}

export default PaintCanvas
