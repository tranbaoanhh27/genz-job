"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, config.db);
}

fs.readdirSync(__dirname)
    .filter((file) => {
        return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
    })
    .forEach((file) => {
        const filePath = path.join(__dirname, file);
        const model = require(filePath)(sequelize, Sequelize.DataTypes);
        // console.log('Models::Intergrating::%s', filePath);
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

//sequelize.sync( {force: true} );
sequelize.sync();

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
