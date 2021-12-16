import { Canvas } from '../../utils/canvas/canvas'

export interface PaintCanvasPropsInterface {
  canvasObj: Canvas | null
  setCanvasObj: (obj: Canvas) => void
}