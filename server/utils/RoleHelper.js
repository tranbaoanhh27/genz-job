'use strict';
const db = require("../models");

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
        db.Role.findByPk(req.params.id)
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
}
module.exports = RoleHelper;