import { Canvas } from './canvas'
import React from 'react'

export class Line extends Canvas {
  private imgStr: string = ''
  private startX: number = 0
  private startY: number = 0

  constructor(_canvas: HTMLCanvasElement, _color: string, _width: number) {
    super(_canvas)
    if (this.ctx) {
      this.ctx.lineWidth = _width
      this.ctx.strokeStyle = _color
    }
  }

  draw(x: number, y: number): void {
    const img = new Image()
    img.src = this.imgStr
    img.onload = () => {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx?.beginPath()
      this.ctx?.moveTo(this.startX, this.startY)
      this.ctx?.lineTo(x, y)
      this.ctx?.stroke()
    }
  }

  mouseDownHandler(event: React.MouseEvent<HTMLCanvasElement>): void {
    const target = event.target as HTMLCanvasElement
    this.mouseDown = true
    this.ctx?.beginPath()
    this.imgStr = this.canvas.toDataURL()
    this.startX = event.pageX - target.offsetLeft
    this.startY = event.pageY - target.offsetTop
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

  setWidth(width: number): void {
    if (this.ctx) {
      this.ctx.lineWidth = width
    }
  }
  setColor(color: string): void {
    if (this.ctx) {
      this.ctx.strokeStyle = color
    }
  }

}