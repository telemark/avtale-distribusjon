const pkg = require('./package.json')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

module.exports = {
  CALLBACK_DIRECTORY_PATH: process.env.CALLBACK_DIRECTORY_PATH || 'test/directories/callback',
  DONE_DIRECTORY_PATH: process.env.DONE_DIRECTORY_PATH || 'test/directories/done',
  ERRORS_DIRECTORY_PATH: process.env.ERRORS_DIRECTORY_PATH || 'test/directories/errors',
  RETRIES_DIRECTORY_PATH: process.env.RETRIES_DIRECTORY_PATH || 'test/directories/retries',
  QUEUE_DIRECTORY_PATH: process.env.QUEUE_DIRECTORY_PATH || 'test/directories/queue',
  AGREEMENTS_LOG_URL: process.env.AGREEMENTS_LOG_URL || 'https://log.service.io/agreements',
  SVARUT_JWT_SECRET: process.env.SVARUT_JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  SVARUT_SERVICE_URL: process.env.SVARUT_SERVICE_URL || 'https://api.svarut.no/sendForsendelse',
  PAPERTRAIL_HOSTNAME: process.env.PAPERTRAIL_HOSTNAME || pkg.name,
  PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || 'logs.papertrailapp.com',
  PAPERTRAIL_PORT: process.env.PAPERTRAIL_PORT || 12345
}
