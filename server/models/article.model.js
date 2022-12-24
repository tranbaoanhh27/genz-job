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
        datePosted: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    Article.associate = function(models) {
        Article.belongsTo(models.User, { foreignKey: 'authorId'});
    };
    return Article;
};