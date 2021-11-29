import React from 'react'
import styled from 'styled-components'

interface Props {
  children?: React.ReactNode;
  width?: string;
  height?: string;
}

const Canvas =
  styled.div <
  Props >
  `
  box-shadow: 0 0 10px gray;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: white;
`

const StyledCanvas = (props: Props) => {
  return <Canvas {...props}>{props.children}</Canvas>
}

export default StyledCanvas
