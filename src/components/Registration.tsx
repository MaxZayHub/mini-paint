import React from 'react'
import { Form, Formik } from 'formik'
import CustomForm from '../styledComponents/Form'
import FormTitle from '../styledComponents/FormTitle'
import { FormInput } from '../styledComponents/FormInput'
import FormButton from '../styledComponents/FormButton'
import Flex from '../styledComponents/Flex'

const Registration = () => {
  return (
    <Flex width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
      <Formik initialValues={{
        userName:'',
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
            <FormTitle>Registration</FormTitle>
            <FormInput name={'userName'} placeholder={'Username'} />
            <FormInput name={'email'} placeholder={'Email'} />
            <FormInput name={'password'} placeholder={'Password'} />
            <FormButton>Send</FormButton>
          </CustomForm>
        </Form>
      </Formik>
    </Flex>
  )
}

export default Registration