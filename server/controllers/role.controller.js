'use strict';
const express = require('express');
const db = require("../models");
const RoleHelper = require("../utils/RoleHelper");

const router = express.Router();

router.get('/', async (req, res) => {
    var roles = await db.Role.findAll();
    res.send(JSON.stringify(roles, null, 2));
});

router.get('/detail/:id', async (req, res) => {
    var role = await db.Role.findByPk(req.params.id);
    if(role)
        res.send(JSON.stringify(role, null, 2));
    else
        res.status(404).send({message: "Role Not Found"});
});

router.get('/user/:id', async (req, res) => {
    var roles = await db.Role.findAll({
            include: UserRole,
            where: {
                '$UserRole.UserId$': req.params.id
            }
        });

    if(roles)
        res.send(JSON.stringify(roles, null, 2));
    else
        res.status(404).send({message: "Roles Not Found"});
});

router.post('/create', RoleHelper.GetRole, RoleHelper.CreateRole);

router.put('/edit/:id', RoleHelper.GetRoleById, RoleHelper.ValidateRole, async (req, res) => {
    const role = req.role;
    db.Role.update({
        Title: role.Title
    }, {
        where: {
            id: role.id
        }
    })
    .then(role => {
        res.send({ message: "Role Updated"});
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
});

router.delete('/delete/:id', RoleHelper.GetRoleById, RoleHelper.ValidateRole, async (req, res) => {
    const role = req.role;
    db.Role.destroy({
        where: {
            id: role.id
        }
    })
    .then(role => {
        res.send({ message: "Role Deleted"});
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
});

module.exports = router;