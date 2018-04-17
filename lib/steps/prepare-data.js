const uuid = require('uuid/v4')

module.exports = data => {
  return new Promise((resolve, reject) => {
    const addons = {
      errors: [],
      retry: false,
      callback: {
        _id: uuid(),
        jobId: data._id
      }
    }
    resolve(Object.assign(data, addons))
  })
}
