"use strict";

const express = require("express");
const db = require("../models");
const { Op } = require("sequelize");

const router = express.Router();

router.post('/create', async(req, res, next) => {
    var ReporterId = req.body.ReporterId;
    var ArticleId = req.body.ArticleId;

    if (ReporterId && ArticleId) {
        let User = await db.User.findByPk(ReporterId);
        let Article = await db.Article.findByPk(ArticleId);
        let Check = await db.Report.findOne({articleId: ArticleId, reporterId: ReporterId});
    
        if (User && Article && !Check) {
            await db.Report.create({
                articleId: ArticleId,
                reporterId: ReporterId,
                createdAt: Date.now(),
                updatedAt: Date.now()
            })
            .then(report => {
                return res.send({message: "Create successfully"});
            })
            .catch(err => {
                return res.status(404).send({message: err.message});
            })
        }
        else {
            return res.status(404).send({message: "Invalidate value"})
        }
    }
    else {
        return res.status(404).send({message: "Invalidate value"})
    }
});

router.get('/', async(req, res, next) => {
    let reports = await db.Report.findAll();
    res.send(JSON.stringify(reports, null, 2));
})

router.get('/all/user/:reporterId', async(req, res, next) => {
    const ReporterId = req.params.reporterId;
    if (ReporterId) {
        await db.Report.findAll({
            where: {
                reporterId: ReporterId
            }
        })
        .then(report => {
            return res.send({data: report});
        })
        .catch(err => {
            return res.status(404).send({message: err.message});
        })
    }
    else {
        return res.status(404).send({message: "Invalidate value"});
    }
});

router.get('/all/article/:articleId', async(req, res, next) => {
    const ArticleId = req.params.articleId;
    if (ArticleId) {
        await db.Report.findAll({
            where: {
                articleId: ArticleId
            }
        })
        .then(report => {
            return res.send({data: report});
        })
        .catch(err => {
            return res.status(404).send({message: err.message});
        })
    }
    else {
        return res.status(404).send({message: "Invalidate value"});
    }
});

router.delete('/delete', async(req, res, next) => {
    const articleId = req.query.articleId;
    if (articleId) {
        let article = await db.Article.findByPk(articleId);
        if (article) {
            await db.Report.destroy({
                where: {
                    articleId: articleId
                }
            })
            .then(report => {
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