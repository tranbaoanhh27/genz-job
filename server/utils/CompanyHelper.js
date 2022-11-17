'use strict';
const db = require("../models");
const { Op } = require("sequelize");

class CompanyHelper {
    static CreateCompany = async (req, res, next) => {
        if (req.company) {
            return res.status(400).send({message: "Company Already Exist. "});
        }
        await db.Company.create({
            companyId: req.body.companyId,
            companyName: req.body.companyName,
            field: req.body.field,
            address: req.body.address,
            phone: req.body.phone,
            website: req.body.website,
            description: req.body.description,
            type: req.body.type,
            lastActivityDate: null,
            createDate: Date()
        })
        .then(company => {
            return res.send({ message: "Company created"});
        })
        .catch(err => {
            return res.status(500).send({ message: err.message });
        });
    }

    static getCompanyById = (req, res, next) => {
        db.Company.findOne({
            where: {
                [Op.or]: [
                    {companyId: req.body.companyId}
                ]
            }
        })
        .then(company => {
            req.company = company;
            next();
        })
        .catch(err => {
            return res.status(500).send({message: err.message});
        });
    }

    static getCompanyByName = (req, res, next) => {
        db.Companies.findAll({
            where: {
                companyName: req.body.companyName
            }
        })
        .then(companies => {
            req.companies = companies;
            next();
        })
        .catch(err => {
            return res.status(500).send({message: err.message})
        })
    }

    static getCompanyByField = (req, res, next) => {
        db.Companies.findAll({
            where: {
                field: req.body.field
            }
        })
        .then(companies => {
            req.companies = companies;
            next();
        })
        .catch(err => {
            return res.status(500).send({message: err.message});
        })
    }

    static getCompanyByType = (req, res, next) => {
        db.Companies.findAll({
            where: {
                type: req.body.type
            }
        })
        .then(companies => {
            req.companies = companies;
            next();
        })
        .catch(err => {
            return res.status(500).send({message: err.message});
        })
    }

    // static validateCompany = (req, res, next) => {
    //     var companyId = req.companyId;

        
    // }
}

module.exports = CompanyHelper;