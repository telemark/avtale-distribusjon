const uuid = require('../generate-uuid')

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
        payload: {
          agreementId: data.agreementId,
          agreementUserId: data.agreementUserId,
          history: [],
          status: 'unsigned'
        }
      }
    }
    resolve(Object.assign({}, data, addons))
  })
}
