const saveFile = require('../save-file')
const logger = require('../logger')
const config = require('../../config')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    logger('info', ['save-to-callback', data._id])
    if (data.errors.length === 0) {
      logger('info', ['save-to-callback', data._id, 'no errors', 'saving to callback'])
      const fileName = `${config.CALLBACK_DIRECTORY_PATH}/${data.callback._id}.json`
      await saveFile({filePath: fileName, data: data.callback})
    } else {
      logger('warn', ['save-to-callback', data._id, 'errors', data.errors.length])
    }
    resolve(data)
  })
}
