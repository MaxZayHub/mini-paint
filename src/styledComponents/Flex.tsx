import React from 'react'
import styled from 'styled-components'

interface Props {
  flexDirection?: string;
  margin?: string;
  width?: string;
  height?: string;
  justifyContent?: string;
  gap?: string;
  alignItems?: string;
  children?: React.ReactNode;
}

const FlexStyled =
  styled.div <
  Props >
  `
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};
  align-items: ${(props) => props.alignItems};
  user-select: none;
`

const Flex = (props: Props) => {
  return <FlexStyled {...props}>{props.children}</FlexStyled>
}

export default Flex
