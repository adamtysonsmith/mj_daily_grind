import axios from 'axios'
import { API_URL } from './config'

const makeRequest = (request) => request
  .then(res => res.data)
  .catch(err => console.log('API Service Error', err))

export default {
  getDrinks: () => makeRequest(axios.get(`${API_URL}/drinks`)),
}