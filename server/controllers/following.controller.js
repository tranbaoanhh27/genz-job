"use strict";

const express = require("express");
const db = require("../models");
const JobHelper = require("../utils/JobHelper");
const UserHelper = require("../utils/UserHelper");
const { Op } = require("sequelize");

const router = express.Router();

//Create a following
router.post("/create", async(req, res, next) => {
	await db.Following.create({
		UserId: req.query.userId,
		FollowerId: req.query.followerId
	})
	.then(following => {
		res.send({ message: "Successfully followed"});
	})
	.catch(err => {
		res.status(500).send({ message: err.message });
	});
});

//Get followings
router.get("/", async(req, res, next) => {
	let followings = "";
	if (req.query.userId)
		followings = await db.Following.findAll({
			where: {
				UserId: req.query.userId
			}
		});
	else
		followings = await db.Following.findAll();
	res.send(JSON.stringify(followings, null, 2));
});

module.exports = router;
