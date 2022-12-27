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

//Delete a following
router.delete("/delete", async(req, res, next) => {
	await db.Following.destroy({
		where: {
            [Op.and]: [
                { UserId: req.query.userId },
                { FollowerId: req.query.followerId }
            ]
        }
	})
	.then(following => {
		res.send({ message: "Successfully unfollowed"});
	})
	.catch(err => {
		res.status(500).send({ message: err.message });
	});
});

//Get followings
router.get("/", async(req, res, next) => {
	let followings = "";
	if (req.query.userId && req.query.followerId) {
		followings = await db.Following.findOne({
			where: {
				UserId: req.query.userId,
				FollowerId: req.query.followerId
			}
		});
	}
	else if (req.query.userId)
		followings = await db.User.findOne({
			where: {
				id: req.query.userId
			},
			include: {
				model: db.User,
				as: "Followee",
				// include: {
				// 	model: db.User,
				// 	as: "Follower"
				// }
			}
		});
	else
		followings = await db.Following.findAll();
	res.send(JSON.stringify(followings, null, 2));
});

module.exports = router;
