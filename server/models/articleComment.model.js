'use strict'
module.exports = (sequelize, DataTypes) => {
    var ArticleComment = sequelize.define('ArticleComment', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        articleId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        commentorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateCommented: {
            type: DataTypes.DATE,
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