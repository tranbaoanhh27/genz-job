'use strict';
module.exports = (sequelize, DataTypes) => {
    var Article = sequelize.define('Article', {
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        media: {
            type: DataTypes.STRING,
            allowNull: false
        },
        authorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        datePosted: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {});

    Article.associate = function(models) {

    };
    return Article;
};