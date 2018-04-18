const saveFile = require('../save-file')
const logger = require('../logger')
const config = require('../../config')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    logger('info', ['save-to-callback', data._id])
    if (data.errors.length === 0) {
      logger('info', ['save-to-callback', data._id, 'no errors', 'saving to callback'])
      let callback = Object.assign({}, data.callback)
      callback.payload.partId = data.signingData.forsendelsesId
      callback.payload.partUserId = data.payload.mottaker[0].fnr
      const fileName = `${config.CALLBACK_DIRECTORY_PATH}/${callback._id}.json`
      await saveFile({filePath: fileName, data: callback})
    } else {
      logger('warn', ['save-to-callback', data._id, 'errors', data.errors.length])
    }
    resolve(data)
  })
}
