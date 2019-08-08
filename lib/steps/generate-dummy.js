const uuid = require('../generate-uuid')
const saveFile = require('../save-file')
const generateDummyData = require('../generate-dummy-data')
const logger = require('../logger')
const config = require('../../config')

module.exports = async data => {
  logger('info', ['generate-dummy', data._id])
  if (data.errors.length === 0 && data.callback !== false && data.needsDummyGuardian) {
    logger('info', ['generate-dummy', data._id, 'needs dummy', 'start'])
    const callback = Object.assign({}, data.callback)
    callback._id = uuid()
    const fileName = `${config.CALLBACK_DIRECTORY_PATH}/${callback._id}.json`
    await saveFile({ filePath: fileName, data: generateDummyData(callback) })
  } else {
    logger('warn', ['generate-dummy', data._id, 'errors', data.errors.length, 'no dummy needed'])
  }
  return data
}
