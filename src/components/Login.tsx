import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {Form, Formik, Field} from 'formik'
import Flex from '../styledComponents/Flex'
import {FormInput} from '../styledComponents/FormInput'
import FormButton from '../styledComponents/FormButton'
import FormTitle from '../styledComponents/FormTitle'
import CustomForm from '../styledComponents/Form'

const Login = () => {
  return (
    <Flex width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
      <Formik initialValues={{
        email: '',
        password: '',
      }} validateOnChange={false}
      validateOnBlur={false}
      validate={(values) => {

      }}
      onSubmit={(values => {
        console.log(values)
      })}>
        <Form>
          <CustomForm>
            <FormTitle>Authorization</FormTitle>
              <FormInput name={'email'} placeholder={'Email'} />
              <FormInput name={'password'} placeholder={'Password'} />
            <FormButton>Send</FormButton>
          </CustomForm>
        </Form>
      </Formik>
    </Flex>
  )
}

export default Login