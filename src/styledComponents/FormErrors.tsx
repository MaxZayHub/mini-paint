import React from 'react'
import styled from 'styled-components'

interface Props {
  children?: React.ReactNode;
}

const FormErrorsStyled = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: red;
  user-select: none;
`

const FormErrors = (props: Props) => {
  return <FormErrorsStyled>{props.children}</FormErrorsStyled>
}

export default FormErrors
