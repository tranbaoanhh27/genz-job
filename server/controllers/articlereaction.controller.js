"use strict";

const express = require("express");
const db = require("../models");
const JobHelper = require("../utils/JobHelper");
const UserHelper = require("../utils/UserHelper");
const { Op } = require("sequelize");

const router = express.Router();

const REACTION = {
	LIKE: 1,
	LOVE: 2,
	HAHA: 3,
	WOW: 4,
	SAD: 5,
	ANGRY: 6
}

//Create a reaction
router.post("/create", async(req, res, next) => {
	await db.ArticleReaction.create({
		ReactorId: req.query.reactorId,
		ArticleId: req.query.articleId,
		ReactionId: req.body.reactionId
	})
	.then(reaction => {
		res.send({ message: "Successfully reacted"});
	})
	.catch(err => {
		res.status(500).send({ message: err.message });
	});
});

//Get reactions
router.get("/", async(req, res, next) => {
	let reactions = "";
	if (req.query.articleId)
		reactions = await db.ArticleReaction.findAll({
			where: {
				ArticleId: req.query.articleId
			}
		});
	else
		reactions = await db.ArticleReaction.findAll();
	res.send(JSON.stringify(reactions, null, 2));
});

// Delete reactions
router.delete('/delete', async(req, res, next) => {
	const articleId = req.query.articleId;
	const reactorId = req.query.userId;

	if (articleId && reactorId) {
		let article = await db.Article.findByPk(articleId);
		let user = await db.Article.findByPk(reactorId);
		let reaction = await db.ArticleReaction.findOne({
			where: {
				ReactorId: reactorId,
				ArticleId: articleId
			}
		})

		if (article && user && reaction) {
			await db.ArticleReaction.destroy({
				where: {
					ReactorId: reactorId,
					ArticleId: articleId
				}
			})
			.then(articleReaction => {
				return res.send({message: "Done succesfully"});
			})
			.catch(err => {
				return res.send({message: err.message});
			})
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
