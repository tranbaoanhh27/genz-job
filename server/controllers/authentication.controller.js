'use strict';
const express = require('express');
const jwt = require("jsonwebtoken");
const db = require("../models");
const bcrypt = require("bcryptjs");
const AuthencationHelper = require('../utils/AuthencationHelper');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const router = express.Router()

router.post('/signin', async (req, res) => {
    await db.User.findOne({
        where: {
            userName: req.body.userName
        }
    })
    .then(user => {
        if(!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        const validatePassword = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if(!validatePassword) {
            return res.status(401).send({
                accessToken: null,
                message: "Wrong Password!"
            });
        }

        var token = jwt.sign({ id: user.id }, config.authencation.secretKey, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).send({
            id: user.id,
            username: user.userName,
            email: user.email,
            accessToken: token
          });
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
});

router.post('/isAuthenticated', AuthencationHelper.VerifyToken, (req, res) => {
    if(!req.user) {
        return res.status(401).send({
            message: "Unauthorized!"
          });
    }
    res.status(200).send({"IsAuthenticated": true});
})

module.exports = router;