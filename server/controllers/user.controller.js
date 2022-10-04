'use strict';

const express = require('express')
const db = require("../models");
const UserHelper = require("../utils/UserHelper");

const router = express.Router()

router.get('/', async (req, res, next) => {
    console.log("GET::User");
    var users = await db.User.findAll();
    res.send(JSON.stringify(users, null, 2));
});

router.post('/', UserHelper.GetUser, UserHelper.CreateUser);

router.put('/', UserHelper.GetUser, UserHelper.ValidateUser, async (req, res, next) => {
    const user = req.user;
    db.User.update({
        userName: user.userName,
        email: user.email,
        password: bcrypt.hashSync(user.password, 8),
        lastActivyDate: Date.now()
    }, {
        where: {
            id: user.id
        }
    })
    .then(user => {
        res.send({ message: "User Updated"});
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
});

router.delete('/', UserHelper.GetUser, UserHelper.ValidateUser, async (req, res, next) => {
    const user = req.user;
    db.User.destroy({
        where: {
            id: user.id
        }
    })
    .then(user => {
        res.send({ message: "User Deleted"});
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
});

module.exports = router