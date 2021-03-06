const saveFile = require('../save-file')
const logger = require('../logger')
const config = require('../../config')

module.exports = async data => {
  logger('info', ['save-to-retries', data._id])
  if (data.retry === true) {
    const fileName = `${config.RETRIES_DIRECTORY_PATH}/${data._id}.json`
    await saveFile({ filePath: fileName, data: data })
    logger('info', ['save-to-retries', data._id, fileName, 'success'])
  } else {
    logger('info', ['save-to-retries', data._id, 'no retry'])
  }
  return data
}
