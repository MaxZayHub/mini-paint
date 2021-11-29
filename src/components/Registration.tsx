import React from 'react'
import { Form, Formik } from 'formik'
import CustomForm from '../styledComponents/Form'
import FormTitle from '../styledComponents/FormTitle'
import { FormInput } from '../styledComponents/FormInput'
import FormButton from '../styledComponents/FormButton'
import Flex from '../styledComponents/Flex'
import { validation } from '../utils/validation'
import FormBlock from '../styledComponents/FormBlock'
import FormErrors from '../styledComponents/FormErrors'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { nanoid } from 'nanoid'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { addUserToDb } from '../context/usersContext'
import { getCurrentUser } from '../actions-creators/user'
import { Link } from 'react-router-dom'
import FormLink from '../styledComponents/FormLink'

interface ValidateValues {
  username?: string;
  email?: string;
  password?: string;
}

const Registration = () => {
  const users = useTypeSelector((state) => state.users.users)

  const dispatch = useDispatch()

  const history = useHistory()

  const registerValidation = (values: ValidateValues) => {
    let errors: ValidateValues = {}
    if (!values.username) {
      errors.username = 'Required'
    } else if (
      !/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(
        values.username
      )
    ) {
      errors.username = 'Invalid username'
    } else if (
      users.filter((user: ValidateValues) => user.username === values.username)
        .length > 0
    ) {
      errors.username = 'This username is already taken'
    }
    if (
      users.filter((user: ValidateValues) => user.email === values.email)
        .length > 0
    ) {
      errors.email = 'This email is already taken'
    }
    Object.assign(errors, validation(values))

    return errors
  }

  return (
    <Flex
      width={'100%'}
      height={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validateOnChange={false}
        validateOnBlur={false}
        validate={(values) => {
          return registerValidation(values)
        }}
        onSubmit={(values) => {
          const newUser = {
            id: nanoid(),
            username: values.username,
            password: values.password,
            email: values.email,
          }
          addUserToDb(newUser)
          dispatch(getCurrentUser(newUser))
          history.push('/main')
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <CustomForm>
                <FormTitle>Registration</FormTitle>
                <FormBlock>
                  <FormInput name={'username'} placeholder={'Username'} />
                  {touched.username && errors.username ? (
                    <FormErrors>{errors.username}</FormErrors>
                  ) : null}
                </FormBlock>
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
                <Link to={'/login'} style={{ textDecoration: 'none' }}>
                  <FormLink>Login</FormLink>
                </Link>
              </CustomForm>
            </Form>
          )
        }}
      </Formik>
    </Flex>
  )
}

export default Registration
