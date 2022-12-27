'use strict'
const express = require("express");
const db = require("../models");
const { Op } = require("sequelize");
const { response } = require("express");

const router = express.Router();

//Create an article
router.post('/create', async (req, res, next) => {
    const authorId = req.body.authorId;
    if (authorId) {
        let author = await db.User.findByPk(authorId);
        if (author) {
            await db.Article.create({
                content: req.body.content,
                media: req.body.media,
                authorId: req.body.authorId,
                datePosted: Date.now()
            })
            .then(Article => {
                return res.send({message: "Article created"});
            })
            .catch(err => {
                return res.status(500).send({message: err.message});
            });
        }
        else {
            return res.status(500).send({message: "Invalidate value"});
        }
    }
    else {
        return res.status(500).send({message: "Invalidate value"});
    }
});

router.get('/all', async (req, res, next) => {
    let articles = ""
    articles = await db.Article.findAll();
    res.send(JSON.stringify(articles, null, 2));
})

//Get all articleId of a userId
router.get("/", async (req, res, next) => {
    let articles = "";
    let user = "";
    // var userId = req.query.userId;
    
    // userName = await db.User.findByPk(userId);

    if (req.query.userId) {
        user = await db.User.findByPk(req.query.userId);

        articles = await db.Article.findAll({
            include: { model: db.User },
            where: {
                authorId: req.query.userId
            }
        });
    }
    else
        articles = await db.Article.findAll({
            include: { model: db.User }
        });
    
    const userName = user["UserName"];
    let result = {userName, articles};

    res.send(JSON.stringify(result, null, 2));
});

router.delete('/delete/:articleId', async (req, res, next) => {
    const articleId = req.params.articleId;

    if (articleId) {
        let article = await db.Article.findByPk(articleId);
        if (article) {
            // delete object in article comment
            await db.ArticleComment.destroy({
                where: {
                    ArticleId: articleId 
                }
            })
            .catch(err => {
                return res.status(404).send({message: err.message});
            })

            // delete object in report
            await db.Report.destroy({
                where: {
                    articleId: articleId
                }
            })
            .catch(err => {
                return res.status(404).send({message: err.message});
            })

            // delete object in article reaction
            await db.ArticleReaction.destroy({
                where: {
                    articleId: articleId
                }
            })
            .catch(err => {
                return res.status(404).send({message: err.message});
            })

            // delete object in article
            await db.Article.destroy({
                where: {
                    id: articleId
                }
            })
            .then(article => {
                return res.send({message: "delete successfully"});
            })
            .catch(err => {
                return res.status(500).send({message: err.message});
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

module.exports = router