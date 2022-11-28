const { argv } = require('yargs/yargs')(process.argv.slice(2))
require('dotenv').config()

if (!argv?.NODE_ENV) {
  throw new Error('Set NODE_ENV params (development or production)')
}

if (!['development', 'production'].includes(argv.NODE_ENV)) {
  throw new Error(`Set NODE_ENV params (development or production). Current: ${argv.NODE_ENV}`)
}

process.env.NODE_ENV = argv.NODE_ENV

const rimraf = require('rimraf')
const fs = require('fs')
const path = require('path')
const tar = require('tar')
const axios = require('axios')
const https = require('https')

const config = require(path.resolve(__dirname, '../src/config'))

const ROOT_DIR = path.resolve(__dirname, '..')
const INSTALL_DIR = path.resolve(ROOT_DIR, 'w5mf-types')
const TYPES_FILE = 'w5mf-types.tar'
const INSTALL_FILE = path.resolve(ROOT_DIR, TYPES_FILE)
const REMOTES = config.remotes || {}

const parseRemoteUrl = remoteUrl => {
  const parse = remoteUrl.split('@')
  const remote = parse[1].split('/')
  const url = remote.slice(0, remote.length - 1).join('/')
  return { name: parse[0], url }
}

const run = async remote => {
  const module = parseRemoteUrl(remote)
  try {
    const response = await axios.get(`${module.url}/${TYPES_FILE}`, {
      responseType: 'blob',
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    })
    fs.writeFile(INSTALL_FILE, response.data, () => {
      tar.extract({ file: INSTALL_FILE }, () => {
        rimraf(INSTALL_FILE, () =>
          console.log(`[REMOTE_TYPES] Remove '${INSTALL_FILE}' for '${module.url}'`),
        )
      })
    })
  } catch (error) {
    console.log('[REMOTE_TYPES][ERROR]', error)
  }
}

;(() => {
  for (const [name, url] of Object.entries(REMOTES)) {
    const pathToOldModuleTypes = path.resolve(INSTALL_DIR, name)

    rimraf(pathToOldModuleTypes, async error => {
      console.log(`[REMOTE_TYPES] Remove '${pathToOldModuleTypes}'`, error)

      await run(url)
    })
  }
})()
