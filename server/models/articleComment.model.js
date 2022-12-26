'use strict'
module.exports = (sequelize, DateTypes) => {
    var ArticleComment = sequelize.define('ArticleComment', {
        id: {
            type: DateTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        articleId: {
            type: DateTypes.INTEGER,
            allowNull: false
        },
        commentorId: {
            type: DateTypes.INTEGER,
            allowNull: false
        },
        comment: {
            type: DateTypes.STRING,
            allowNull: false
        },
        dateCommented: {
            type: DateTypes.DATE,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    ArticleComment.associate = function(models) {
        ArticleComment.belongsTo(models.User, {foreignKey: 'commentorId', targetKey: 'id'});
        ArticleComment.belongsTo(models.Article, {foreignKey: 'articleId', targetKey: 'id'});
    };
    return ArticleComment;
};