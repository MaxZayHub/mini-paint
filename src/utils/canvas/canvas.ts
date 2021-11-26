import { ICanvas } from './ICanvas'
import React from 'react'

export abstract class Canvas implements ICanvas{
  public canvas: HTMLCanvasElement
  public ctx:  CanvasRenderingContext2D | null

  protected constructor(_canvas: HTMLCanvasElement) {
    this.canvas = _canvas
    this.ctx = _canvas.getContext('2d')
  }

  setColor(color: string) {
    if (this.ctx) {
      this.ctx.fillStyle = color
    }
  }

  setWidth(width: number) {
    if (this.ctx) {
      this.ctx.lineWidth = width
    }
  }

  abstract mouseUpHandler(event: React.MouseEvent<HTMLCanvasElement>) : void
  abstract mouseDownHandler(event: React.MouseEvent<HTMLCanvasElement>) : void
  abstract mouseMoveHandler(event: React.MouseEvent<HTMLCanvasElement>) : void
  abstract mouseOutHandler(event: React.MouseEvent<HTMLCanvasElement>) : void
}