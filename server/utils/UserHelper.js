'use strict';
const db = require("../models");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");

class UserHelper {
    static CreateUser = async (req, res, next) => {
        if(req.user) {
            return res.status(400).send({ message: "User Already Exist." });
        }
        await db.User.create({
            userName: req.body.userName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            createdDate: Date.now(),
            lastActivyDate: Date.now()
          })
          .then(user => {
            return res.send({ message: "User Created" });
          })
          .catch(err => {
            return res.status(500).send({ message: err.message });
          });
    }

    static GetUser = (req, res, next) => {
        db.User.findOne({
            where: {
                [Op.or]: [
                    { userName: req.body.userName },
                    { email: req.body.email}
                ]
            }
        })
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => {
            return res.status(500).send({ message: err.message });
        });
    }

    static GetUserById = (req, res, next) => {
        db.User.findByPk(req.params.id)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => {
            return res.status(500).send({ message: err.message });
        });
    }

    static ValidateUser = (req, res, next) => {
        var user = req.user;

        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        req.user = user;
        next();
    }
}

module.exports = UserHelper;