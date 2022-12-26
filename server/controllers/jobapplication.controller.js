"use strict";

const express = require("express");
const db = require("../models");
const JobHelper = require("../utils/JobHelper");
const UserHelper = require("../utils/UserHelper");
const { Op } = require("sequelize");

const router = express.Router();

const STATUS = {
    APPLIED: 1,
    ACCEPTED: 2,
    DECLINED: 3,
};

//Create an application
router.post("/create", async (req, res, next) => {
    db.JobApplication.create({
        UserId: req.query.userId,
        JobId: req.query.jobId,
        StatusId: STATUS.APPLIED,
    })
        .then((application) => {
            res.send({ message: "Successfully applied" });
        })
        .catch((err) => {
            res.status(500).send({ message: err.message });
        });
});

//Get applications
router.get("/", async (req, res, next) => {
    let applications = "";
    if (req.query.userId)
        applications = await db.JobApplication.findAll({
            where: {
                UserId: req.query.userId,
            },
        });
    else applications = await db.JobApplication.findAll();
    res.send(JSON.stringify(applications, null, 2));
});

// Get applications for jobId
router.get("/all/:jobId", async (req, res, next) => {
    let jobApplications = "";
    jobApplications = await db.JobApplication.findAll({
        include: [db.User],
        where: {
            JobId: req.params.jobId,
        },
    });
    if (jobApplications === "") {
        return res.send({ message: "No application founded" });
    } else {
        return res.send(JSON.stringify(jobApplications, null, 2));
    }
});

module.exports = router;
