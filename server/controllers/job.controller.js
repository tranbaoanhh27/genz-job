"use strict";

const express = require("express");
const db = require("../models");
const JobHelper = require("../utils/JobHelper");
const UserHelper = require("../utils/UserHelper");
const AuthencationHelper = require("../utils/AuthencationHelper");
const { Op } = require("sequelize");
const { response } = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
	var jobs = await db.Job.findAll({
		include: [
			db.JobProperty,
			{
				model: db.User,
				as: "Author"
			}
		]
	});
	res.send(JSON.stringify(jobs, null, 2));
});

router.get("/detail/:id", async (req, res, next) => {
	var job = await db.Job.findByPk(req.params.id, {
		include: [
			db.JobProperty,
			{
				model: db.User,
				as: "Author"
			}
		]
	});
	if (job) res.send(JSON.stringify(job, null, 2));
	else res.status(404).send({ message: "Job Not Found" });
});

router.post("/:authorId/create",
	async (req, res, next) => {
		req.params.id = req.params.authorId;
		next();
	},
	AuthencationHelper.VerifyToken,
	UserHelper.GetUserById,
	JobHelper.CreateJob
);

router.get("/:authorId/getJobs",
	async (req, res, next) => {
		req.params.id = req.params.authorId;
		next();
	},
	UserHelper.GetUserById,
	async (req, res, next) => {
		var jobs = await db.Job.findAll({
			include: [
				db.JobProperty,
				{
					model: db.User,
					as: "Author"
				}
			],
			where: {
				authorId: req.params.authorId
			}
		});
		res.send(JSON.stringify(jobs, null, 2));
	}
);

router.put("/edit", AuthencationHelper.VerifyToken, JobHelper.EditJob);

router.post("/:jobId/newProperty", 
	async (req, res, next) => {
		req.jobId = req.params.jobId;
		next();
	}, JobHelper.AddJobProperty);

// router.get("/search", async (req, res) => {
// 	var keyword = req.query.k;
// 	var numOfResult = req.query.num;
// 	if (!numOfResult) 
// 		numOfResult = 1000;
// 	var jobs = await db.Job.findAll({
// 		where: {
// 			[Op.or]: [
// 				{title: {[Op.like]: '%' + keyword + '%'}},
// 				{description: {[Op.like]: '%' + keyword + '%'}},
// 			]
// 		},
// 		limit: parseInt(numOfResult)
// 	});
// 	res.send(JSON.stringify(jobs, null, 2));
// });

router.get('/search', async (req, res, next) => {
	var jobId = req.query.jobId;
	var numOfResult = req.query.num;
	if (!numOfResult)
		numOfResult = 100;

	var targetJob = await db.Job.findByPk(jobId);
	if (targetJob) {
		let jobs = "";
		jobs = await db.Job.findAll({
			attributes: ['id', 'title', 'datePosted'],
			// include: [
			// 	db.JobProperty,
			// ],
			where: {
				[Op.or]: [
					{title: {[Op.like]: '%' + targetJob.title + '%'}},
					{description: {[Op.like]: '%' + targetJob.description + '%'}},
				]
			},
			limit: parseInt(numOfResult)
		})

		res.send(JSON.stringify(jobs, null, 2));
	}
	else {
		res.status(404).send({message: "Not found target job"})
	}
});

router.get('/find', async (req, res, next) => {
	let jobs = ""
	jobs = await db.Job.findAll({
		where: {
			authorId: req.query.userId
		}
	})

	if (jobs) {
		res.send(JSON.stringify(jobs, null, 2));
	}
	else {
		res.status(404).send({message: "No job founded"})
	}
});

router.delete("/delete", async(req, res, next) => {
	const jobId = req.query.jobId;
	if (jobId) {
		let job = await db.Job.findByPk(jobId);
		if (job) {

			// delete application
			await db.JobApplication.destroy({
				where: {
					JobId: jobId
				}
			})
			.catch(err => {
				return res.status(404).send({message: err.message});
			})

			// delete jobProperty
			await db.JobProperty.destroy({
				where: {
					jobId: jobId
				}
			})

			// delete BookMark
			await db.Bookmark.destroy({
				where: {
					JobId: jobId
				}
			})

			// delete job
			await db.Job.destroy({
				where: {
					id: jobId
				}
			})
			.then(job => {
				return res.send({message: "Done successfully"});
			})
			.catch(err => {
				return res.status(404).send({message: err.message});
			})
		}
		else {
			return res.status(404).send({message: "Invalidate value"});
		}
	}
	else {
		return res.status(404).send({message: "Invalidate value"});
	}
});

module.exports = router;