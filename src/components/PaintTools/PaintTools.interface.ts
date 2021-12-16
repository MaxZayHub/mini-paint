import { Canvas } from '../../utils/canvas/canvas'

export  interface PaintToolsPropsInterface {
  canvasObj: Canvas | null
  setCanvasObj: (canvasObj: Canvas) => void
}

export interface PaintToolsPropsStylesInterface {
  active: boolean;
}