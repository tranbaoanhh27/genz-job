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
        let user = await db.User.findByPk(CommentorId);
        let article = await db.Article.findByPk(ArticleId);

        if (user && article) {
            await db.ArticleComment.create({
                commentorId: CommentorId,
                articleId: ArticleId,
                comment: req.body.comment
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

router.delete('/delete', async(req, res, next) => {
    const id = req.query.id;
    
    if (id) {
        let comment = await db.ArticleComment.findByPk(id);
        
        if (comment) {
            await db.ArticleComment.destroy({
                where: {
                    id: id
                }
            })
            .then(articleComment => {
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