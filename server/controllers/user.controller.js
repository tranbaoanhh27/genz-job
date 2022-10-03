'use strict';

const express = require('express')
const db = require("../models");
const bcrypt = require("bcryptjs");

const router = express.Router()

router.get('/', async (req, res, next) => {
    var users = await db.User.findAll();
    res.send(JSON.stringify(users, null, 2));
});

router.post('/', async (req, res, next) => {
    await db.User.create({
        userName: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
      })
      .then(user => {
        res.send("User Created");
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
      
});
module.exports = router