'use strict';

const express = require('express');
// const { stringify } = require('querystring');
// const { Where } = require('sequelize/types/utils');
const db = require('../models');
const CompanyHelper = require('../utils/CompanyHelper')
const router = express.Router()

router.get('/', async (req, res, next) => {
    var companies = await db.Company.findAll();
    res.send(JSON.stringify(companies, null, 2));
});

router.get('/detail/:id', async(req, res, next) => {
    var company = await db.User.findOne({
        where: {
            companyId: req.body.companyId
        }
    });

    if (company)
        res.send(JSON.stringify(company, null, 2));
    else
        res.status(404).send({message: "Company not found"});
})

router.get('/:field', async(req, res, next) => {
    var companies = await db.Company.findAll({
        where: {
            field: req.body.field
        }  
    });

    if (company) {
        res.send(JSON.stringify(company, null, 2));
    }
    else {
        res.status(404).send({message: "Company not found"});
    }
})

router.get('/:type', async(req, res, next) => {
    var companies = await db.Company.findAll({
        where: {
            type: req.body.type
        }
    });

    if (companies) {
        res.send(JSON.stringify(company, null, 2));
    }
    else {
        res.status(404).send({message: "company not found"});
    }
})

// router.put('/edit/:id', CompanyHelper.getCompanyById, CompanyHelper.get)

router.post('/create', CompanyHelper.getCompanyById, CompanyHelper.CreateCompany);


module.exports = router;