'use strict';

const express = require('express')
const db = require("../models");
const UserHelper = require("../utils/UserHelper");

const router = express.Router()

router.get('/', async (req, res, next) => {
    var users = await db.User.findAll();
    res.send(JSON.stringify(users, null, 2));
});

router.get('/detail/:id', async (req, res, next) => {
    var user = await db.User.findByPk(req.params.id);
    if(user)
        res.send(JSON.stringify(users, null, 2));
    else
        res.status(404).send({message: "User Not Found"});
});

router.post('/create', UserHelper.GetUser, UserHelper.CreateUser);

router.put('/edit/:id(\d+)', UserHelper.GetUserById, UserHelper.ValidateUser, async (req, res) => {
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

router.delete('/delete/:id', UserHelper.GetUserById, UserHelper.ValidateUser, async (req, res) => {
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