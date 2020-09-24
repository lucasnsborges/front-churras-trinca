import React, { useState } from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { Formik } from 'formik'
import { login, register } from '../../api/user'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import {
  Container,
  Content,
  Field,
  Label,
  ErrorFieldMessage,
  ErrorMessage,
  Link
} from './styles'

export default function Login() {
  const [tab, setTab] = useState('login')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (body) => {
    setLoading(true)
    setErrorMessage('')

    if (tab === 'register') {
      const resRegister = await register(body)

      if (resRegister.error) {
        setLoading(false)
        return setErrorMessage(resRegister.error)
      }

      if (resRegister.id) {
        handleLogin(body)
      }
    }

    if (tab === 'login') {
      handleLogin(body)
    }
  }

  const handleLogin = async (body) => {
    const resLogin = await login(body)

    if (resLogin.error) {
      setLoading(false)
      return setErrorMessage(resLogin.error)
    }

    if (resLogin.token) {
      setTimeout(() => {
        return handleRedirect(resLogin.token, resLogin.user)
      }, 1500)
    }
  }

  const handleRedirect = (token, user) => {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    window.location.href = '/home'
  }

  return (
    <Container>
      <Content>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {}

            if (values.password.length < 6) {
              errors.password = 'Sua senha precisa ter mais de 6 caracteres'
            }

            if (!values.email) {
              errors.email = 'Preencha o campo com o seu email para continuar'
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Preencha o campo com um email válido'
            }
            return errors
          }}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              {errorMessage &&
                <ErrorMessage>
                  {errorMessage}
                </ErrorMessage>
              }
              <Field>
                <Label>Login</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email &&
                  <ErrorFieldMessage>
                    {errors.email}
                  </ErrorFieldMessage>
                }
              </Field>
              <Field>
                <Label>Senha</Label>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password &&
                  <ErrorFieldMessage>
                    {errors.password}
                  </ErrorFieldMessage>
                }
              </Field>
              {tab === 'login' ? (
                <Link onClick={() => setTab('register')}>
                  Criar conta
                </Link>
              ) : (
                <Link onClick={() => setTab('login')}>
                  Já tenho uma conta
                </Link>
              )}
              <Button type="submit" disabled={isSubmitting}>
                {loading ? (
                  <Loader type="ThreeDots" color="#fff" height={14} width={44} />
                ) : (
                  <span>
                    {tab === 'login' ? 'Entrar' : 'Cadastrar'}
                  </span>
                )}
              </Button>
            </form>
          )}
        </Formik>
      </Content>
    </Container>
  )
}
