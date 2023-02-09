"use strict";

const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";

module.exports = (app) => {
    fs.readdirSync(__dirname)
        .filter((file) => {
            return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
        })
        .forEach((file) => {
            const filePath = path.join(__dirname, file);
            const controllerName = file.replace(".controller", "").replace(".js", "");
            // console.log('filepath: %s', filePath);
            const controller = require(filePath);

            app.use("/" + controllerName, controller);

            // console.log("Controllers::Intergrated::%s", controllerName);
        });
};
