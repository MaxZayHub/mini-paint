import React from 'react'
import styled from 'styled-components'

interface Props {
  children?: React.ReactNode;
}

const FormBlockStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`

const FormBlock = (props: Props) => {
  return <FormBlockStyled>{props.children}</FormBlockStyled>
}

export default FormBlock
