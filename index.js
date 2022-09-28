'use strict';

const { db } = require('./src/auth/models');
const { start } = require('./src/server');

db.sync()
  .then(() => {
    console.log('Successfully connected to Database!');
    start();
  })
  .catch((e) => console.error(e));









