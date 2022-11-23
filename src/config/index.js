const merge = require('lodash/merge')

const mainConfig = require('./configs/main')
const mainLocalConfig = require('./configs/main.local')
const configuration = require('./configuration.json')

module.exports =
  process.env.NODE_ENV === 'production'
    ? merge(mainConfig, configuration)
    : merge(mainConfig, mainLocalConfig)
