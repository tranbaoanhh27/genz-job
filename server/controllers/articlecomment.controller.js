'use strict'
const express = require("express");
const db = require("../models");
const { Op } = require("sequelize");
const e = require("express");

const router = express.Router();

router.post('/create', async(req, res, next) => {
    const CommentorId = req.body.commentorId;
    const ArticleId = req.body.articleId;

    if (CommentorId && ArticleId) {
        let comment = await db.User.findByPk(CommentorId);
        let article = await db.Article.findByPk(ArticleId);

        if (comment && article) {
            await db.ArticleComment.create({
                commentorId: CommentorId,
                articleId: ArticleId,
                comment: req.body.comment,
                dateCommented: Date.now()
            })
            .then(articleComment => {
                return res.send({message: "Done successfully"});
            })
            .catch(err => {
                return res.status(404).send({message: err.message});
            })
        }
        else {
            return res.send({message: "Invalidate value"});
        }
    }
    else {
        return res.status(404).send({message: "Invalidate value"});
    }
});

router.get('/all/user/:commentorId', async(req, res, next) => {
    const CommentorId = req.params.commentorId;
    if (CommentorId) {
        await db.ArticleComment.findAll({
            where: {
                commentorId: CommentorId
            }
        })
        .then(ArticleComment => {
            return res.send({data: ArticleComment});
        })
        .catch(err => {
            return res.status(404).send({message: err.message});
        });
    }
    else {
        return res.status(404).send({message: "Invalide value"});
    }
});

router.get('/all/article/:articleId', async(req, res, next) => {
    const ArticleId = req.params.articleId;
    if (ArticleId) {
        await db.ArticleComment.findAll({
            where: {
                articleId: ArticleId
            }
        })
        .then(ArticleComment => {
            return res.send({data: ArticleComment});
        })
        .catch(err => {
            return res.status(404).send({message: err.message});
        });
    }
    else {
        return res.status(404).send({message: "Invalide value"});
    }
});

module.exports = router;