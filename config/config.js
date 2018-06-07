const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const APP_NAME = "Weather Forecast";
const API_KEY = process.env.API_KEY || "97421f07c8db604c53b1c54e6eb522d9";

const config = {
  development: {
    root: rootPath,
    app: {
      name: APP_NAME,
      darkSky : {
        apiKey: API_KEY
      }
    },
    port: process.env.PORT || 3000
  },

  test: {
    root: rootPath,
    app: {
      name: APP_NAME,
      darkSky : {
        apiKey: API_KEY
      }
    },
    port: process.env.PORT || 3000
  },

  production: {
    root: rootPath,
    app: {
      name: APP_NAME,
      darkSky : {
        apiKey: API_KEY
      }
    },
    port: process.env.PORT || 3000
  }
};

module.exports = config[env];