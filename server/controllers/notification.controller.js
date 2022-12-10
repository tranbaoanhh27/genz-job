"use strict";

const express = require("express");
const db = require("../models");
const JobHelper = require("../utils/JobHelper");
const UserHelper = require("../utils/UserHelper");
const { Op } = require("sequelize");

const router = express.Router();

const STATUS = {
	UNREAD: 1,
	READ: 2
}

//Create a notification
router.post("/create", async(req, res, next) => {
	await db.Notification.create({
		RecipientId: req.query.recipientId,
		SenderId: req.query.senderId,
		Status: STATUS.UNREAD,
		Content: req.body.content
	})
	.then(notification => {
		res.send({ message: "Successfully notified"});
	})
	.catch(err => {
		res.status(500).send({ message: err.message });
	});
});

//Get notifications
router.get("/", async(req, res, next) => {
	let notifications = "";
	if (req.query.recipientId)
		notifications = await db.Notification.findAll({
			where: {
				RecipientId: req.query.recipientId
			}
		});
	else
		notifications = await db.Notification.findAll();
	res.send(JSON.stringify(notifications, null, 2));
});

module.exports = router;
