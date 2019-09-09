import axios from 'axios'

export default {
  get(options) {
    return axios(options)
    .then(result=>{
      return result.data
    })
  },

  post({url, data}) {
    return axios({
      url,
      method: 'POST',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(result => result)
  }
}