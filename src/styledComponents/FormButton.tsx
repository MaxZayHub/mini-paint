import React from 'react'
import styled from 'styled-components'

interface Props {
  children?: React.ReactNode
}

const FormButtonStyled = styled.button`
  width: 80px;
  height: 28px;
  border: none;
  background-color: rgb(232,76,61);
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: 0.2s;
  font-size: 16px;
  margin-bottom: 10px;
  
  &:hover {
    background-color: rgb(248, 118, 105);
  }
`

const FormButton = (props:Props) => {
  return (
    <FormButtonStyled>
      {props.children}
    </FormButtonStyled>
  )
}

export default FormButton