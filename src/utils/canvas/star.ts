import { Canvas } from './canvas'
import React from 'react'

export class Star extends Canvas {
  private startX :number = 0
  private startY: number = 9
  private imgStr: string = ''

  constructor(_canvas: HTMLCanvasElement, _color: string, _width: number) {
    super(_canvas)
    if (this.ctx) {
      this.ctx.strokeStyle = _color
      this.ctx.lineWidth = _width
    }
  }

  draw(spikes: number, outerRadius: number): void {
    const img = new Image()
    img.src = this.imgStr
    img.onload = () => {
      let innerRadius = outerRadius / 2
      let cx = this.startX
      let cy = this.startY
      let rot = Math.PI / 2 * 3;
      let x = cx;
      let y = cy;
      let step = Math.PI / spikes;
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx?.beginPath();
      this.ctx?.moveTo(cx, cy - outerRadius)
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        this.ctx?.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        this.ctx?.lineTo(x, y)
        rot += step
      }
      this.ctx?.lineTo(cx, cy - outerRadius)
      this.ctx?.stroke()
    }
  }

  mouseDownHandler(event: React.MouseEvent<HTMLCanvasElement>): void {
    this.mouseDown = true
    const target = event.target as HTMLCanvasElement
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
      let currentRadius = Math.sqrt((currentX - this.startX) ** 2 + (currentY - this.startY) ** 2)
      this.draw(5, currentRadius)
    }
  }

  mouseOutHandler(event: React.MouseEvent<HTMLCanvasElement>): void {
    this.mouseDown = false
  }

  mouseUpHandler(event: React.MouseEvent<HTMLCanvasElement>): void {
    this.mouseDown = false
  }

  setColor(color: string) {
    if (this.ctx) {
      this.ctx.strokeStyle = color
    }
  }

  setWidth(width: number) {
    if (this.ctx) {
      this.ctx.lineWidth = width
    }
  }
}
