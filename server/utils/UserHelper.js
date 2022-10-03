'use strict';
const db = require("../models");

class UserHelper {
    static getUserByUserName = (req, res, next) => {
        var user = db.User.findOne({
            where: {
              userName: req.body.username
            }
        })
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }
            req.user = user;
            next();
        })
    }
}

module.exports = UserHelper;