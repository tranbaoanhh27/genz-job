'use strict';

const express = require('express')
const db = require("../models");
const bcrypt = require("bcryptjs");
const UserHelper = require("../utils/UserHelper");

const router = express.Router()

router.get('/', async (req, res, next) => {
    var users = await db.User.findAll();
    res.send(JSON.stringify(users, null, 2));
});

router.post('/', async (req, res, next) => {
    await db.User.create({
        userName: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        createdDate: Date.now(),
        lastActivyDate: Date.now()
      })
      .then(user => {
        res.send("User Created");
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
      
});

router.put('/', UserHelper.getUserByUserName, async (req, res, next) => {
    db.User.update({
        userName: req.user.username,
        email: req.user.email,
        password: bcrypt.hashSync(req.user.password, 8),
        lastActivyDate: Date.now()
    }, {
        where: {
            id: user.id
        }
    })
    .then(user => {
        res.send("User Updated");
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
});

router.delete('/', UserHelper.getUserByUserName, async (req, res, next) => {
    db.User.destroy({
        where: {
            id: user.id
        }
    })
    .then(user => {
        res.send("User Deleted");
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
});

module.exports = router