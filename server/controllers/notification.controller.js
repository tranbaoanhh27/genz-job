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

router.put('/mark', async (req, res, next) => {
	const status = req.body.status;
	const notifcationId = req.body.notificationId;
	if (status && notifcationId) {
		await db.Notification.update({Status: status}, {
			where: {id: notifcationId}
		})
		.then(notification => {
			return res.send({message: "Done completely"});
		})
		.catch(err => {
			return res.status(404).send({message: err.message});
		})
	}
	else {
		return res.status(404).send({message: "Can not change status"});
	}
});

router.put('/mark/all', async (req, res, next) => {
	const status = req.body.status;
	const userId = req.body.userId;
	if (status && userId) {
		await db.Notification.update({Status: status}, {
			where: {SenderId: userId}
		})
		.then(notification => {
			return res.send({message: "Done completely"});
		})
		.catch(err => {
			return res.status(404).send({message: err.message});
		})
	}
	else {
		return res.status(404).send({message: "Can found userId or Status"});
	}
})

router.delete('/delete', async(req, res, next) => {
	const senderId = req.query.senderId;

	if (senderId) {
		let notification = await db.Notification.findOne({
			where: {
				SenderId: senderId
			}
		})
		.catch(err =>{
			return res.status(404).send({message: err.message})
		})

		if (notification) {
			await db.Notification.destroy({
				where: {
					SenderId: senderId
				}
			})
			.then(notification => {
				return res.send({message: "Done successfully"});
			})
			.catch(err => {
				return res.status(404).send({message: err.message});
			});
		}
		else {
			return res.status(404).send({message: "Invalidate value"});
		}
	}
	else {
		return res.status(404).send({message: "Invalidate value"});
	}
})

module.exports = router;
