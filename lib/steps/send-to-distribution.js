const config = require('../../config')
const postData = require('../post-data')
const generatePayload = require('../generate-payload')
const logger = require('../logger')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    if (!data.requireDigitalSignature) {
      let distributionData = false
      logger('info', ['send-to-distribution', data._id])
      const options = {
        url: config.AGREEMENTS_SERVICE_URL,
        secret: config.AGREEMENTS_JWT_SECRET,
        payload: generatePayload(data)
      }
      distributionData = await postData(options)

      if (distributionData !== false) {
        logger('info', ['send-to-distribution', data._id, 'success'])
        data.distributionData = distributionData
      } else {
        logger('error', ['send-to-dirstribution', data._id])
        data.errors.push(new Error('Distribution initiation failed'))
      }
    } else {
      logger('info', ['send-to-confirm', data._id, 'No confirmation needed'])
    }
    resolve(data)
  })
}
