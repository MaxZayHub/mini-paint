import React from 'react'
import styled from 'styled-components'

interface Props {
  children?: React.ReactNode
  width?: string,
  height?: string
}

const PaintButtonStyled = styled.button<Props>`
  width: ${props => props.width};
  height: ${props => props.height};
  outline: none;
  background-color: white;
`

const PaintButton = (props: Props) => {
  return (
    <PaintButton>
      {props.children}
    </PaintButton>
  )
}

export default PaintButton