const path = require('path')
const rfs = require('rotating-file-stream')

const logStream = rfs.createStream(process.env.LOG_FILE || 'taskAPI.log', {
    interval: process.env.LOG_INTERVAL || '1d',
    path: path.join(path.resolve('./'),'log')
})

module.exports = logStream
