import axios from 'axios'
import { url, config } from './config'

export const getCurrentUser = async () => {
  const request = await axios
    .get(`${url}/users/me`, config)
    .catch(err => err.response)

  if (request.data.error) {
    return {
      error: request.data.error,
    }
  }

  return request.data
}

export const register = async body => {
  const request = await axios
    .post(`${url}/users`, body, config)
    .catch(err => err.response)

  if (request.data.error) {
    return {
      error: request.data.error,
    }
  }

  return request.data
}

export const login = async body => {
  const auth = {
    username: body.email,
    password: body.password,
  }

  const request = await axios
    .post(`${url}/auth`, {}, { auth })
    .catch(err => err.response)

  if (request.status === 401) {
    return {
      error: 'Verifique se digitou email e senha corretamente',
    }
  }

  return request.data
}
