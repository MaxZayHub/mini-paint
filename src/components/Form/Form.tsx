import React from 'react'
import { FormPropsInterface } from './Form.interface'
import { Styles } from './Form.styles'

const CustomForm = (props: FormPropsInterface) => {
  return (
    <Styles.FormStyled>
      <Styles.Flex>
        {props.children}
      </Styles.Flex>
    </Styles.FormStyled>
  )
}

export default CustomForm