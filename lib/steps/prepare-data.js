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
        url: config.AGREEMENTS_SERVICE_URL,
        payload: {
          agreementId: data.agreementId,
          agreementUserId: data.agreementUserId,
          agreementType: data.agreementType,
          created: data.created,
          dueDays: data.dueDays,
          history: [],
          status: 'unsigned'
        }
      }
    }
    resolve(Object.assign({}, data, addons))
  })
}
