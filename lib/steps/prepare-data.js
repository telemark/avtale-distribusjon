const uuid = require('../generate-uuid')

function generateCallbackData (data) {
  return {
    _id: uuid(),
    jobId: data._id,
    method: 'PUT',
    url: data.agreementService.serviceUrl,
    payload: {
      aid: data.agreementId,
      type: data.agreementType,
      name: data.recipients[0].navn,
      partOf: data.agreementPartOf,
      isDummy: false,
      isManual: !data.korIsValid,
      canBeDigital: true
    }
  }
}

module.exports = data => {
  return new Promise((resolve, reject) => {
    const addons = {
      errors: [],
      retry: false,
      signingData: false,
      callback: data.agreementService ? generateCallbackData(data) : false
    }
    resolve(Object.assign({}, data, addons))
  })
}
