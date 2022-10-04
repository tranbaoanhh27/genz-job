'use strict';

const jwt = require("jsonwebtoken");
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = require("../models");
const { Op } = require("sequelize");
const { TokenExpiredError } = jwt;

class AuthencationHelper {
    catchError = (err, res) => {
      if (err instanceof TokenExpiredError) {
        return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
      }
    
      return res.sendStatus(401).send({ message: "Unauthorized!" });
    }

    static VerifyToken = (req, res, next) => {
        let token = req.headers["x-access-token"];
      
        if (!token) {
          return res.status(403).send({
            message: "No token provided!"
          });
        }
      
        jwt.verify(token, config.authencation.secretKey, (err, decoded) => {
          if (err) {
            return catchError(err, res);
          }

          db.User.findByPk(decoded.id).then(user => {
            if(!user) {
              return res.status(401).send({ message: "Unauthorized." });
            }
          
            req.user = user;
            next();
          })
          .catch(err => {
            res.status(500).send({ message: err.message });
          })
        });
      };
}

module.exports = AuthencationHelper;