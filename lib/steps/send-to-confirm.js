const config = require('../../config')
const postData = require('../post-data')
const generatePayload = require('../generate-payload')
const logger = require('../logger')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    if (!data.requireDigitalSignature) {
      let signingData = false
      logger('info', ['send-to-confirm', data._id])
      const options = {
        url: config.AGREEMENTS_SERVICE_URL,
        secret: config.AGREEMENTS_JWT_SECRET,
        payload: generatePayload(data)
      }
      signingData = await postData(options)

      if (signingData !== false) {
        logger('info', ['send-to-confirm', data._id, 'success'])
        data.signingData = signingData
      } else {
        logger('error', ['send-to-confirm', data._id])
        data.errors.push(new Error('Confirmations initiation failed'))
      }
    } else {
      logger('info', ['send-to-confirm', data._id, 'No confirmation needed'])
    }
    resolve(data)
  })
}
