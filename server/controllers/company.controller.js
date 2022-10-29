'use strict';

const express = require('express');
const CompanyHelper = require('../utils/CompanyHelper')
const router = express.Router()

router.get('/', async (req, res, next) => {
    res.status(404).send({message: "company Not Found"});
});

module.exports = router;