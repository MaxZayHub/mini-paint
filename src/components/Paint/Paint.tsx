import React, { useState } from 'react'
import PaintTools from '../PaintTools/PaintTools'
import PaintCanvas from '../PaintCanvas/PaintCanvas'
import { Link } from 'react-router-dom'
import { Canvas } from '../../utils/canvas/canvas'
import { FormLink } from '../../controls/FormLink'
import { Styles } from './Paint.styles'

const Paint = () => {
  const [canvasObj, setCanvasObj] = useState<Canvas | null>(null)

  return (
    <Styles.PageWrapper>
      <Styles.ContentWrapper>
        <PaintTools canvasObj={canvasObj} setCanvasObj={setCanvasObj} />
        <PaintCanvas canvasObj={canvasObj} setCanvasObj={setCanvasObj} />
        <Link to={'/main'} style={{ textDecoration: 'none' }}>
          <FormLink> Back to main</FormLink>
        </Link>
      </Styles.ContentWrapper>
    </Styles.PageWrapper>
  )
}

export default Paint
