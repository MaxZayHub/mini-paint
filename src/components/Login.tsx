import React from 'react'
import { Form, Formik, FormikValues } from 'formik'
import Flex from '../styledComponents/Flex'
import { FormInput } from '../styledComponents/FormInput'
import FormButton from '../styledComponents/FormButton'
import FormTitle from '../styledComponents/FormTitle'
import CustomForm from '../styledComponents/Form'
import { validation } from '../utils/validation'
import FormBlock from '../styledComponents/FormBlock'
import FormErrors from '../styledComponents/FormErrors'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { User } from '../types/user'
import { useDispatch } from 'react-redux'
import { getCurrentUser } from '../actions-creators/user'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import FormLink from '../styledComponents/FormLink'

const Login = () => {
  const users = useTypeSelector((state) => state.users.users)

  const history = useHistory()

  const dispatch = useDispatch()

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
          const errors: FormikValues = {}

          if (
            !users.find(
              (user: User) =>
                user.email === values.email && user.password === values.password
            )
          ) {
            errors.email = 'No such user found'
          }

          Object.assign(errors, validation(values))

          return errors
        }}
        onSubmit={(values) => {
          const currentUser = users.find(
            (user: User) =>
              user.email === values.email && user.password === values.password
          )
          if (currentUser) {
            dispatch(getCurrentUser(currentUser))
            history.push('/main')
          }
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
                <Link to={'/register'} style={{ textDecoration: 'none' }}>
                  <FormLink>Registration</FormLink>
                </Link>
              </CustomForm>
            </Form>
          )
        }}
      </Formik>
    </Flex>
  )
}

export default Login
