import React from 'react'

export interface ICanvas {
  canvas: HTMLCanvasElement,
  ctx:  CanvasRenderingContext2D | null
  setColor: (color: string) => void
  setWidth: (width: number) => void
  mouseUpHandler(event: React.MouseEvent<HTMLCanvasElement>) : void
  mouseDownHandler(event: React.MouseEvent<HTMLCanvasElement>) : void
  mouseMoveHandler(event: React.MouseEvent<HTMLCanvasElement>) : void
  mouseOutHandler(event: React.MouseEvent<HTMLCanvasElement>) : void
}