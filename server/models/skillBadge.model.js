'use strict'
module.exports = (sequelize, DataTypes) => {
    var SkillBadge = sequelize.define('SkillBadge', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        testId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {});

    SkillBadge.associate = function(models) {

    };
    return SkillBadge;
};