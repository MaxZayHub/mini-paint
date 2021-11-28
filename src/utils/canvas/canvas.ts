import React from 'react'

export abstract class Canvas {
  public canvas: HTMLCanvasElement
  public ctx:  CanvasRenderingContext2D | null
  protected mouseDown: boolean = false

  protected constructor(_canvas: HTMLCanvasElement) {
    this.canvas = _canvas
    this.ctx = _canvas.getContext('2d')
  }

  abstract setWidth(width: number) : void
  abstract setColor(color: string) : void
  abstract mouseUpHandler(event: React.MouseEvent<HTMLCanvasElement>) : void
  abstract mouseDownHandler(event: React.MouseEvent<HTMLCanvasElement>) : void
  abstract mouseMoveHandler(event: React.MouseEvent<HTMLCanvasElement>) : void
  abstract mouseOutHandler(event: React.MouseEvent<HTMLCanvasElement>) : void
  abstract draw(x: number, y: number) : void
}