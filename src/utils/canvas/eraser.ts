import { Canvas } from './canvas'
import React from 'react'

export class Eraser extends Canvas {
  constructor(_canvas: HTMLCanvasElement, _width: number) {
    super(_canvas)
    if (this.ctx) {
      this.ctx.lineWidth = _width
      this.ctx.strokeStyle = '#ffffff'
    }
  }

  setWidth(width: number): void {
    if (this.ctx) {
      this.ctx.lineWidth = width
    }
  }
  
  setColor(color: string): void {
  }

  draw(x: number, y: number): void {
    this.ctx?.lineTo(x, y)
    this.ctx?.stroke()
  }

  mouseDownHandler(event: React.MouseEvent<HTMLCanvasElement>): void {
    const target = event.target as HTMLCanvasElement
    this.mouseDown = true
    if (this.ctx) {
      this.ctx.beginPath()
      this.ctx.moveTo(event.pageX - target.offsetLeft, event.pageY - target.offsetTop)
    }
  }

  mouseMoveHandler(event: React.MouseEvent<HTMLCanvasElement>): void {
    const target = event.target as HTMLCanvasElement
    if (this.mouseDown) {
      let currentX = event.pageX - target.offsetLeft
      let currentY = event.pageY - target.offsetTop
      this.draw(currentX, currentY)
    }
  }

  mouseOutHandler(event: React.MouseEvent<HTMLCanvasElement>): void {
    this.mouseDown = false
  }

  mouseUpHandler(event: React.MouseEvent<HTMLCanvasElement>): void {
    this.mouseDown = false
  }
}