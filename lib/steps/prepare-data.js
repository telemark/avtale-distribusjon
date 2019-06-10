const uuid = require('../generate-uuid')
const config = require('../../config')

module.exports = data => {
  return new Promise((resolve, reject) => {
    const addons = {
      errors: [],
      retry: false,
      signingData: false,
      callback: {
        _id: uuid(),
        jobId: data._id,
        method: 'PUT',
        url: config.AGREEMENTS_LOG_URL,
        payload: {
          aid: data.agreementId,
          type: data.agreementType
        }
      }
    }
    resolve(Object.assign({}, data, addons))
  })
}
