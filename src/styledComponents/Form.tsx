import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'

interface Props {
  onSubmit?: React.FormEvent<HTMLFormElement> | undefined
  children?: React.ReactNode
}

const FormStyled = styled.div`
  width: 400px;
  background-color: #ececec;
  border: 2px solid #dcdcdc;
  box-shadow: 0 0 10px lightgray;
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