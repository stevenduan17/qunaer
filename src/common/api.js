import Axios from 'axios'

const ERROR_OK = 0

function get (url) {
  return function (params = {}) {
    return Axios.get(url, { params }).then((res) => {
      const { error, data } = res.data
      if (error === ERROR_OK) {
        return data
      }
    }).catch((e) => {
      console.log(e)
    })
  }
}

const getInfo = get('/api/info')
export { getInfo }
