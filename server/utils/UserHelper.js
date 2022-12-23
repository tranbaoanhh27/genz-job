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
            UserName: req.body.userName,
            Email: req.body.email,
            Password: bcrypt.hashSync(req.body.password, 8),
            CreatedDate: Date.now(),
            LastActivyDate: Date.now()
          })
          .then(user => {
            return res.send({ data: user });
          })
          .catch(err => {
            return res.status(500).send({ message: err.message });
          });
    }

    static GetUser = (req, res, next) => {
        db.User.findOne({
            where: {
                [Op.or]: [
                    { UserName: req.body.userName },
                    { Email: req.body.email}
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
        var userId = req.params.id;
        
        if(!userId)
            userId = req.body.userId;
            
        db.User.findByPk(userId)
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