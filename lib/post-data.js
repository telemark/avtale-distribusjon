const axios = require('axios')
const generateSystemToken = require('./generate-system-token')
const logger = require('./logger')

module.exports = options => {
  return new Promise(async (resolve, reject) => {
    axios.defaults.headers.common['Authorization'] = generateSystemToken(options.secret)
    logger('info', ['post-data', options.url, 'start'])
    try {
      const { data } = axios.post(options.url, options.payload)
      logger('info', ['post-data', options.url, 'success'])
      resolve(data)
    } catch (error) {
      logger('error', ['post-data', options.url, error])
      resolve(false)
    }
  })
}
