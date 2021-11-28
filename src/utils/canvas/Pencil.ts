import { Canvas } from './canvas'
import React from 'react'

export class Pencil extends Canvas {
  constructor(_canvas: HTMLCanvasElement) {
    super(_canvas)
  }

  mouseUpHandler(){
    this.mouseDown = false
  }

  mouseDownHandler(event: React.MouseEvent<HTMLCanvasElement>) {
    const target = event.target as HTMLCanvasElement
    this.mouseDown = true
    if (this.ctx) {
      this.ctx.beginPath()
      this.ctx.moveTo(event.pageX - target.offsetLeft, event.pageY - target.offsetTop)
    }
  }

  mouseMoveHandler(event: React.MouseEvent<HTMLCanvasElement>){
    const target = event.target as HTMLCanvasElement
    if (this.mouseDown) {
      let currentX = event.pageX - target.offsetLeft
      let currentY = event.pageY - target.offsetTop
      this.draw(currentX, currentY)
    }

  }

  mouseOutHandler(){
    this.mouseDown = false
  }

  draw(x: number, y:  number) {
    this.ctx?.lineTo(x, y)
    this.ctx?.stroke()
  }
}