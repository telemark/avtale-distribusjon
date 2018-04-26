const config = require('../../config')
const postData = require('../post-data')
const generatePayload = require('../generate-payload')
const logger = require('../logger')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    let signingData = false
    logger('info', ['send-to-signing', data._id])
    const options = {
      url: data.requireDigitalSignature ? config.SVARUT_SERVICE_URL : config.AGREEMENTS_SERVICE_URL,
      secret: data.requireDigitalSignature ? config.SVARUT_JWT_SECRET : config.AGREEMENTS_JWT_SECRET,
      payload: generatePayload(data)
    }
    signingData = await postData(options)

    if (signingData !== false) {
      logger('info', ['send-to-signing', data._id, 'success'])
      data.signingData = signingData
    } else {
      logger('error', ['send-to-signing', data._id])
      data.errors.push(new Error('Signing initiation failed'))
    }
    resolve(data)
  })
}
