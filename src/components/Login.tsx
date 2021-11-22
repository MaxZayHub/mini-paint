import React from 'react'
import { Form, Formik } from 'formik'
import Flex from '../styledComponents/Flex'
import { FormInput } from '../styledComponents/FormInput'
import FormButton from '../styledComponents/FormButton'
import FormTitle from '../styledComponents/FormTitle'
import CustomForm from '../styledComponents/Form'
import { validation } from '../utils/validation'
import FormBlock from '../styledComponents/FormBlock'
import FormErrors from '../styledComponents/FormErrors'

const Login = () => {
  return (
    <Flex
      width={'100%'}
      height={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validate={(values) => {
          return validation(values)
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <CustomForm>
                <FormTitle>Authorization</FormTitle>
                <FormBlock>
                  <FormInput name={'email'} placeholder={'Email'} />
                  {touched.email && errors.email ? (
                    <FormErrors>{errors.email}</FormErrors>
                  ) : null}
                </FormBlock>
                <FormBlock>
                  <FormInput
                    name={'password'}
                    placeholder={'Password'}
                    type={'password'}
                  />
                  {touched.password && errors.password ? (
                    <FormErrors>{errors.password}</FormErrors>
                  ) : null}
                </FormBlock>
                <FormButton>Send</FormButton>
              </CustomForm>
            </Form>
          )
        }}
      </Formik>
    </Flex>
  )
}

export default Login
