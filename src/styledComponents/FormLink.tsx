import React from 'react'
import styled from 'styled-components'

interface Props {
  children?: React.ReactNode
}

const FormLinkStyled = styled.div`
  margin: 0 0 10px 0;
`

const FormLink = (props:Props) => {
  return (
    <FormLinkStyled>
      {props.children}
    </FormLinkStyled>
  )
}

export default FormLink