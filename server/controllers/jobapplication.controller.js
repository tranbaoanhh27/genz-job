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
	DECLINED: 3
};

//Create an application
router.post("/create", async(req, res, next) => {
	db.JobApplication.create({
		UserId: req.query.userId,
		JobId: req.query.jobId,
		StatusId: STATUS.APPLIED
	})
	.then(application => {
		res.send({ message: "Successfully applied"});
	})
	.catch(err => {
		res.status(500).send({ message: err.message });
	});
});

//Get applications
router.get("/", async(req, res, next) => {
	let applications = "";
	if (req.query.userId)
		applications = await db.JobApplication.findAll({
			where: {
				UserId: req.query.userId
			}
		});
	else
		applications = await db.JobApplication.findAll();
	res.send(JSON.stringify(applications, null, 2));
});

// Get applications for jobId
router.get('/all/:jobId', async(req, res, next) => {
	let jobApplications = "";
	jobApplications = await db.JobApplication.findAll({
		include: [
			db.User
		],
		where: {
			JobId: req.params.jobId
		}
	});
	if (jobApplications === "") {
		return res.send({message: "No application founded"});
	}
	else{
		return res.send(JSON.stringify(jobApplications, null, 2));
	}
});


router.put('/mark', async(req, res, next) => {
	const newStatusId = req.body.newStatusId;
	const candidateId = req.body.candidateId;
	const jobId = req.body.jobId;

	if (newStatusId && candidateId && jobId) {
		if (newStatusId < 1 || newStatusId > 3) {
			return res.status(404).send({message: "Invalidate message"});
		}

		let candidate = await db.User.findByPk(candidateId);
		let job = await db.Job.findByPk(jobId);
		let application = await db.JobApplication.findOne({
			where: {
				UserId: candidateId,
				JobId: jobId
			}
		});


		if (candidate && job && application) {
			await db.JobApplication.update({StatusId: newStatusId},{
				where: {
					UserId: candidateId,
					JobId: jobId
				}
			})
			.then(jobApplication => {
				return res.send({message: "Done completely"});
			})
			.catch(err => {
				return res.status(404).send({message: err.message});
			});
		}
		else {
			return res.status(404).send({message: "Invalidate value"});
		}
	}
	else{
		return res.status(404).send({message: "Invalidate value"});
	}
});
module.exports = router;
