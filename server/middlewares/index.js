'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

module.exports = (app) => {
    fs
    .readdirSync(__dirname)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      const filePath = path.join(__dirname, file);

      const middlewareName = file.replace('.middleware', '').replace('.js', '');
      const middleware = require(filePath);

      app.use(middleware());

      console.log('Middleware::Intergrated::%s', middlewareName);
    });
}
