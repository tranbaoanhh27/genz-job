'use strict';

const express = require('express');
const db = require('../models');
const JobHelper = require('../utils/JobHelper');
const UserHelper = require('../utils/UserHelper');

const router = express.Router()

router.get('/', async (req, res, next) => {
    var jobs = await db.Job.findAll({
        include: {
            model: db.User
        }
    });
    res.send(JSON.stringify(jobs, null, 2));
});

router.get('/detail/:id', async (req, res, next) => {
    var job = await db.Job.findByPk(req.params.id);
    if (job)
        res.send(JSON.stringify(job, null, 2))
    else
        res.status(404).send({message: "Job Not Found"});
});

router.post('/:id/create', UserHelper.GetUserById ,JobHelper.CreateJob);

module.exports = router;