import axios from 'axios'
/*
 * Generic HttpClient to be used within different apis
 */
class HttpClient {
  constructor(baseURL = '', params = {}) {
    this.client = axios.create({
      baseURL,
      params,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  get(endpoint, params = {}) {
    return this.client.get(endpoint, { params })
  }

  post(endpoint, data = {}, params) {
    return this.client.post(endpoint, data, { params })
  }
}

export default HttpClient;
