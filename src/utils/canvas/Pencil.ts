import { Canvas } from './canvas'
import React from 'react'

export class Pencil extends Canvas{
  constructor(_canvas: HTMLCanvasElement) {
    super(_canvas)
    console.log(_canvas)
  }

  mouseUpHandler(){

  }

  mouseDownHandler(event: React.MouseEvent<HTMLCanvasElement>) {
    // const target = event.target as HTMLCanvasElement
    // if (this.ctx) {
    //   this.ctx.beginPath()
    //   this.ctx.moveTo(event.pageX - target.offsetLeft, event.pageY - target.offsetTop)
    // }
    console.log(this.ctx)
  }

  mouseMoveHandler(event: React.MouseEvent<HTMLCanvasElement>){
    const target = event.target as HTMLCanvasElement
  }

  mouseOutHandler(){

  }

}