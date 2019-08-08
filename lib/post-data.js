const axios = require('axios')
const generateSystemToken = require('./generate-system-token')
const logger = require('./logger')

module.exports = async options => {
  axios.defaults.headers.common['Authorization'] = generateSystemToken(options.secret)
  logger('info', ['post-data', options.url, 'start'])
  try {
    const { data } = await axios.post(options.url, options.payload)
    logger('info', ['post-data', options.url, 'success'])
    return data
  } catch (error) {
    logger('error', ['post-data', options.url, error])
    return false
  }
}
