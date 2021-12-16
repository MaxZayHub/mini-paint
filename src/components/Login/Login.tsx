import React from 'react'
import { Form, Formik, FormikValues } from 'formik'
import { FormInput } from '../../controls/FormInput'
import { FormButton } from '../../controls/FormButton'
import { FormTitle } from '../../shared/FormTitle'
import CustomForm from '../Form/Form'
import { validation } from '../../utils/validation'
import { FormBlock } from '../../shared/FormBlock'
import { FormErrors } from '../../shared/FormErrors'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { User } from '../../types/user'
import { useDispatch } from 'react-redux'
import { getCurrentUser } from '../../actions-creators/user'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { FormLink } from '../../controls/FormLink'
import { Styles } from './Login.styles'

const Login = () => {
  const users = useTypeSelector((state) => state.users.users)
  const history = useHistory()
  const dispatch = useDispatch()

  return (
    <Styles.Flex>
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
        {({ errors}) => {
          return (
            <Form>
              <CustomForm>
                <FormTitle>Authorization</FormTitle>
                <FormBlock>
                  <FormInput name={'email'} placeholder={'Email'} />
                  <FormErrors>{errors.email}</FormErrors>
                </FormBlock>
                <FormBlock>
                  <FormInput
                    name={'password'}
                    placeholder={'Password'}
                    type={'password'}
                  />
                  <FormErrors>{errors.password}</FormErrors>
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
    </Styles.Flex>
  )
}

export default Login
