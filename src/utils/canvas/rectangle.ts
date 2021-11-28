import { Canvas } from './canvas'
import React from 'react'

export class Rectangle extends Canvas {
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

  draw(x: number, y: number): void {
    const img = new Image()
    img.src = this.imgStr
    img.onload =() => {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx?.beginPath()
      this.ctx?.rect(this.startX, this.startY, x, y)
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
    if (this.mouseDown) {
      const target = event.target as HTMLCanvasElement
      let currentX = event.pageX - target.offsetLeft
      let currentY = event.pageY - target.offsetTop
      let currentWidth = currentX - this.startX
      let currentHeight = currentY - this.startY
      this.draw(currentWidth, currentHeight)
    }
  }

  mouseOutHandler(event: React.MouseEvent<HTMLCanvasElement>): void {
    this.mouseDown = false
  }

  mouseUpHandler(event: React.MouseEvent<HTMLCanvasElement>): void {
    this.mouseDown = false
  }
}