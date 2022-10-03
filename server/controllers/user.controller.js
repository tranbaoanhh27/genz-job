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

router.put('/', async (req, res, next) => {
    var user = db.User.findOne({
        where: {
          userName: req.body.username
        }
    })
    .then(user => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }

        db.User.update({
            userName: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
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
});

router.delete('/', async (req, res, next) => {
    var user = db.User.findOne({
        where: {
          userName: req.body.username
        }
    })
    .then(user => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }

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
});

module.exports = router