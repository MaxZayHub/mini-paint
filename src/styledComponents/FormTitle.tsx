import React from 'react'
import styled from 'styled-components'

interface Props {
  children?: React.ReactNode
}

const FormTitleStyled = styled.h2`
  margin: 10px 0 0 0;
  font-family: 'Roboto', sans-serif;
  user-select: none;
`


const FormTitle = (props:Props) => {
  return (
    <FormTitleStyled>
      {props.children}
    </FormTitleStyled>
  )
}

export default FormTitle