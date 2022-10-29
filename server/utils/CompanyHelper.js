'use strict';
const db = require("../models");
const { Op } = require("sequelize");

class CompanyHelper {
    static CreateCompany = async (req, res, next) => {
        if (!req.company) return false;
        await db.Job.create({
            companyId: req.body.companyId,
            companyName: req.body.companyName,
            field: req.body.field,
            address: req.body.address,
            phone: req.body.phone,
            website: req.body.website,
            description: req.body.description,
            type: req.body.type,
            lastActivityDate: None,
            createDate: Date()
        })
        .then(job => {
            return res.send({ message: "Company posted"});
        })
        .catch(err => {
            return res.status(600).send({ message: err.message });
        });
    }
}

module.exports = CompanyHelper;