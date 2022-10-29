'use strict';
const db = require("../models");
const { Op } = require("sequelize");

class RoleHelper {
    static CreateRole = async (req, res) => {
        if(req.role) {
            return res.status(400).send({ message: "Role Already Exist." });
        }
        await db.Role.create({
            Title: req.body.title
        })
        .then(role => {
            return res.send({ message: "Role Created" });
        })
        .catch(err => {
            return res.status(500).send({ message: err.message });
        });
    }

    static GetRole = (req, res, next) => {
        db.Role.findOne({
            where: {
                Title: req.body.title
            }
        })
        .then(role => {
            req.role = role;
            next();
        })
        .catch(err => {
            return res.status(500).send({ message: err.message });
        });
    }

    static GetRoleById = (req, res, next) => {
        var roleId = req.params.id;

        if(!roleId)
            roleId = req.body.roleId;

        db.Role.findByPk(roleId)
        .then(role => {
            req.role = role;
            next();
        })
        .catch(err => {
            return res.status(500).send({ message: err.message });
        });
    }

    static ValidateRole = (req, res, next) => {
        var role = req.role;

        if (!role) {
            return res.status(404).send({ message: "Role Not found." });
        }

        req.role = role;
        next();
    }

    static AssignRoleToUser =  (req, res) => {
        if(!req.user || !req.role)
            return false;
        const user = req.user;
        const role = req.role;

        db.UserRole.findOne({
            where: {
                [Op.and]: [
                    {userId: user.id},
                    {roleId: role.id}
                ]
            }
        })
        .then(userRole => {
            if(userRole) {
                res.status(401).send({message: "User already assigned this role!"});
                return;
            }

            db.UserRole.create({
                UserId: user.id,
                RoleId: role.id
            })
            .then(response => {
                res.send({message: "Succeed"});
            })
        })
        .catch(err => {
            res.status(500).send({message: err.message});
        })
    }

    static UnassignRoleForUser = (req, res) => {
        if(!req.user || !req.role)
            return false;
        const user = req.user;
        const role = req.role;

        db.UserRole.findOne({
            where: {
                [Op.and]: [
                    {userId: user.id},
                    {roleId: role.id}
                ]
            }
        })
        .then(userRole => {
            if(!userRole) {
                res.status(404).send({message: "User not yet assigned this role!"});
                return;
            }

            db.UserRole.destroy({
                where: {
                    [Op.and]: [
                        {userId: user.id},
                        {roleId: role.id}
                    ]
                }
            })
            .then(response => {
                res.send({message: "Succeed"});
            })
        })
        .catch(err => {
            res.status(500).send({message: err.message});
        })
    }
}
module.exports = RoleHelper;