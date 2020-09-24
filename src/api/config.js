export const url = 'https://churras-trinca-server.herokuapp.com'

export const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}
