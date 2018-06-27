'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1529985864793_3487';

  // add your config here
  config.middleware = [];

  config.mysql = {
    // database configuration
    client: {
      // host
      host: process.env.DATABASE_HOST || '127.0.0.1',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'root',
      // database
      database: 'TestDB',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  return config;
};
