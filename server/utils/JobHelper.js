'use strict';
const db = require("../models");
const { Op } = require("sequelize");

class JobHelper {
    static CreateJob = async (req, res, next) => {
        if (!req.user) return false;
        await db.Job.create({
            title: req.body.title,
            description: req.body.description,
            salary: req.body.salary,
            datePosted: new Date(req.body.datePosted),
            closingDate: new Date(req.body.closingDate),
            authorId: req.user.id
        })
        .then(job => {
            return res.send({ message: "Job posted"});
        })
        .catch(err => {
            return res.status(500).send({ message: err.message });
        });
    };

    static AddJobProperty = async (req, res, next) => {
        await db.JobProperty.create({
            title: req.body.title,
            value: req.body.value,
            jobId: req.jobId
        }).
        then(jobProperty => {
            return res.send({ message: "Add new job property successfully"});
        })
        .catch(err => {
            return res.status(500).send({ message: err.message });
        });
    };
}

module.exports = JobHelper;