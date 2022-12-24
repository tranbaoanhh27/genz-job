'use strict'
const express = require("express");
const db = require("../models");
const { Op } = require("sequelize");

const router = express.Router();

//Create an article
router.post('/create', async (req, res, next) => {
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
});

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

// //Get som article of userId
// router.get('/:user/articles', async(err, req, res, next) => {
//     let articles = "";
//     if (req.body.userId) {
//         articles = db.Article.findAll({
//             where: {
//                 authorId: req.params.authorId
//             }
//         })

//         res.send(JSON.stringify(articles, null, 2));
//     }
//     else
//         res.status(500).send({message: err.message});
// })

module.exports = router