'use strict'
module.exports = (sequelize, DataTypes) => {
    var Report = sequelize.define('Report', {
        articleId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reporterId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type:   DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }, {
        timestamps: false
    });

    Report.associate = function(models) {
        Report.belongsTo(models.Article, {foreignKey: 'articleId'});
        Report.belongsTo(models.User, {foreignKey: 'reporterId'})
    }

    return Report;
}