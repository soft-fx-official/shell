const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
require('dotenv').config();

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const https = require('https');

(async () => {

  const configurationPathFile = path.resolve(__dirname, `../${process.env.CONFIGURATION_PATH_FILE}`);
  console.log('[CONFIGURATION][URL][FILE]', process.env.CONFIGURATION_URL_FILE, configurationPathFile);

  try {
    const response = await axios.get(`${process.env.CONFIGURATION_URL_FILE}/${process.env.REACT_APP_NAME}/${argv?.branch}.json`, {
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    })
    if (response.status === 200) {
      fs.writeFileSync(configurationPathFile, JSON.stringify(response.data));
    }
  } catch (error) {
    console.log('[CONFIGURATION][ERROR]', error);
  }

})();
