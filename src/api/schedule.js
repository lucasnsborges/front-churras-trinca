import axios from 'axios'
import moment from 'moment'
import { url, config } from './config'

export const get = async () => {
  const request = await axios
    .get(`${url}/schedule`, config)
    .catch(err => err.response)

  if (request.data.error) {
    return {
      error: request.data.error,
    }
  }

  return request.data
}

export const create = async body => {
  body.date = moment(body.date).format()

  const request = await axios
    .post(`${url}/schedule`, body, config)
    .catch(err => err.response)

  if (request.data.error) {
    return {
      error: request.data.error,
    }
  }

  return request.data
}

export const addGuest = async (id, body) => {
  const request = await axios
    .post(`${url}/schedule/${id}/guests`, body, config)
    .catch(err => err.response)

  if (request.data.error) {
    return {
      error: request.data.error,
    }
  }

  return request.data
}

export const updateGuest = async (id, guestId, body) => {
  const request = await axios
    .put(`${url}/schedule/${id}/guests/${guestId}`, body, config)
    .catch(err => err.response)

  if (request.data.error) {
    return {
      error: request.data.error,
    }
  }

  return request.data
}

export const removeGuest = async (id, guestId) => {
  const request = await axios
    .delete(`${url}/schedule/${id}/guests/${guestId}`, config)
    .catch(err => err.response)

  if (request.data.error) {
    return {
      error: request.data.error,
    }
  }

  return request.data
}
