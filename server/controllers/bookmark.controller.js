"use strict";

const express = require("express");
const db = require("../models");
const JobHelper = require("../utils/JobHelper");
const UserHelper = require("../utils/UserHelper");
const { Op } = require("sequelize");

const router = express.Router();

//Create a bookmark
router.post("/create", async(req, res, next) => {
	db.Bookmark.create({
		UserId: req.query.userId,
		JobId: req.query.jobId
	})
	.then(bookmark => {
		res.send({ message: "Successfully bookmarked"});
	})
	.catch(err => {
		res.status(500).send({ message: err.message });
	});
});

//Get bookmarks
router.get("/", async(req, res, next) => {
	let option = null;
	let bookmarks = "";
	if (req.query.userId)
		bookmarks = await db.Bookmark.findAll({
			where: {
				UserId: req.query.userId
			}
		});
	else
		bookmarks = await db.Bookmark.findAll();
	res.send(JSON.stringify(bookmarks, null, 2));
});

module.exports = router;
