import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'

interface Props {
  onSubmit?: React.FormEvent<HTMLFormElement> | undefined
  children?: React.ReactNode
}

const FormStyled = styled.div`
  width: 400px;
  background-color: ${(props) => props.theme.colors.formBackground};
  border: 2px solid ${props => props.theme.border.formBorder};
  box-shadow: 0 0 10px ${props => props.theme.shadowBorder.formShadowBorder};
  border-radius: 10px;
`

const CustomForm = (props:Props) => {
  return (
    <FormStyled>
      <Flex gap={'20px'} flexDirection={'column'} justifyContent={'space-around'} alignItems={'center'}>
        {props.children}
      </Flex>
    </FormStyled>
  )
}

export default CustomForm