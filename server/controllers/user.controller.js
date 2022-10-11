'use strict';

const express = require('express')
const db = require("../models");
const UserHelper = require("../utils/UserHelper");

const router = express.Router();

// Get list of user
router.get('/', async (req, res) => {
    var users = await db.User.findAll();
    res.send(JSON.stringify(users, null, 2));
});

// Get detail user
router.get('/detail/:id', async (req, res) => {
    db.User.findByPk(req.params.id)
    .then(user => {
        if(user)
            res.send(JSON.stringify(user, null, 2));
        else
            res.status(404).send({message: "User Not Found"});
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
});

//Create
router.post('/create', UserHelper.GetUser, UserHelper.CreateUser);

//Update
router.put('/edit/:id', UserHelper.GetUserById, UserHelper.ValidateUser, async (req, res) => {
    const user = req.user;
    db.User.update({
        UserName: user.userName,
        Email: user.email,
        Password: bcrypt.hashSync(user.password, 8),
        LastActivyDate: Date.now()
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

//Delete
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
module.exports = router;