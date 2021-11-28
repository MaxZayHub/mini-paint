import React, { useCallback, useEffect, useRef, useState } from 'react'
import StyledCanvas from '../styledComponents/StyledCanvas'
import { PaintData } from '../types/paintData'
import { Canvas } from '../utils/canvas/canvas'
import { Pencil } from '../utils/canvas/Pencil'

interface Props {
  canvasObj: Canvas | null
  setCanvasObj: (obj: Canvas) => void
}

interface FigureInfo {
  startX: number,
  startY: number,
  imgStr: string,
}

const PaintCanvas = (props: Props) => {
  const [figureInfo, setFigureInfo] = useState<FigureInfo>({
    startX: 0,
    startY: 0,
    imgStr: ''
  })

  const measureRef = useCallback(node => {
    if (node) {
      props.setCanvasObj(new Pencil(node as HTMLCanvasElement))
    }
  },[])

  // let ctx: CanvasRenderingContext2D | null = null
  //
  // if (props.canvasRef.current) {
  //   ctx = (props.canvasRef.current as HTMLCanvasElement).getContext('2d')
  //   if (ctx) {
  //     if (props.paintData.eraser) {
  //       ctx.lineWidth = parseInt(props.paintData.pencilWidth, 10)
  //       ctx.strokeStyle = '#ffffff'
  //     } else {
  //       ctx.lineWidth = parseInt(props.paintData.pencilWidth, 10)
  //       ctx.strokeStyle = props.paintData.color
  //     }
  //   }
  // }

  // const [mouseDown, setMouseDown] = useState(false)
  //
  // const mouseDownHandler = (event: React.MouseEvent<HTMLCanvasElement>) => {
  //   const target = event.target as HTMLCanvasElement
  //   setMouseDown(true)
  //   ctx?.beginPath()
  //   if (props.paintData.pencil) {
  //     ctx?.moveTo(event.pageX - target.offsetLeft, event.pageY - target.offsetTop)
  //   } else if ((props.paintData.rectangle || props.paintData.circle || props.paintData.line) && props.canvasRef.current) {
  //     setFigureInfo(figureInfo => ({...figureInfo,
  //       imgStr: (props.canvasRef.current as unknown as HTMLCanvasElement).toDataURL(),
  //       startX: event.pageX - target.offsetLeft,
  //       startY:  event.pageY - target.offsetTop}))
  //   }
  // }

  // const mouseMoveHandler = (event: React.MouseEvent<HTMLCanvasElement>) => {
  //   const target = event.target as HTMLCanvasElement
  //   if (mouseDown) {
  //     if (props.canvasRef.current) {
  //       let current = props.canvasRef.current as HTMLCanvasElement
  //       ctx = current.getContext('2d')
  //       if (ctx) {
  //         let currentX = event.pageX - target.offsetLeft
  //         let currentY = event.pageY - target.offsetTop
  //         if (props.paintData.pencil || props.paintData.eraser) {
  //           draw(event.pageX - target.offsetLeft, event.pageY - target.offsetTop)
  //         } else if (props.paintData.rectangle) {
  //           let currentWidth = currentX - figureInfo.startX
  //           let currentHeight = currentY - figureInfo.startY
  //           drawRect(figureInfo.startX, figureInfo.startY, currentWidth, currentHeight)
  //         } else if (props.paintData.circle) {
  //           let currentRadius = Math.sqrt((currentX - figureInfo.startX) ** 2 + (currentY - figureInfo.startY) ** 2)
  //           drawCircle(figureInfo.startX, figureInfo.startY, currentRadius)
  //         } else if (props.paintData.line){
  //           drawLine(figureInfo.startX, figureInfo.startY, currentX, currentY)
  //         }
  //       }
  //     }
  //   }
  // }
  //
  // const mouseUpHandler = () => {
  //   setMouseDown(false)
  // }
  //
  // const onMouseOutHandler = () => {
  //   setMouseDown( false)
  // }
  //
  // const draw = (x: number, y: number) => {
  //   if (ctx) {
  //     ctx.lineTo(x, y)
  //     ctx.stroke()
  //   }
  // }
  //
  // const drawRect = (x: number, y: number, w: number, h: number) => {
  //   const canvas = props.canvasRef.current as unknown as HTMLCanvasElement
  //   const img = new Image()
  //   img.src = figureInfo.imgStr
  //   img.onload = () => {
  //     ctx?.clearRect(0, 0, canvas.width, canvas.height)
  //     ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)
  //     ctx?.beginPath()
  //     ctx?.rect(x, y, w, h)
  //     ctx?.stroke()
  //   }
  // }
  //
  // const drawCircle = (x: number, y: number, radius: number) => {
  //   const canvas = props.canvasRef.current as unknown as HTMLCanvasElement
  //   const img = new Image()
  //   img.src = figureInfo.imgStr
  //   img.onload =() => {
  //     ctx?.clearRect(0, 0, canvas.width, canvas.height)
  //     ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)
  //     ctx?.beginPath()
  //     ctx?.arc(x, y, radius, 0, 2 * Math.PI)
  //     ctx?.stroke()
  //   }
  // }
  //
  // const drawLine = (currentX :number, currentY :number, x: number, y: number) => {
  //   const canvas = props.canvasRef.current as unknown as HTMLCanvasElement
  //   const img = new Image()
  //   img.src = figureInfo.imgStr
  //   img.onload =() => {
  //     ctx?.clearRect(0, 0, canvas.width, canvas.height)
  //     ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)
  //     ctx?.beginPath()
  //     ctx?.moveTo(currentX, currentY)
  //     ctx?.lineTo(x, y)
  //     ctx?.stroke()
  //   }
  // }

  return (
    <StyledCanvas width={'700px'} height={'500px'}>
      <canvas
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