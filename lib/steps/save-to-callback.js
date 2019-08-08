const saveFile = require('../save-file')
const logger = require('../logger')
const config = require('../../config')

module.exports = async data => {
  logger('info', ['save-to-callback', data._id])
  if (data.errors.length === 0 && data.callback !== false) {
    logger('info', ['save-to-callback', data._id, 'no errors', 'saving to callback'])
    const callback = Object.assign({}, data.callback)
    callback.payload.fid = data.signingData[0]
    callback.payload.uid = data.recipients[0].fnr
    const fileName = `${config.CALLBACK_DIRECTORY_PATH}/${callback._id}.json`
    await saveFile({ filePath: fileName, data: callback })
  } else {
    logger('warn', ['save-to-callback', data._id, 'errors', data.errors.length])
  }
  return data
}
