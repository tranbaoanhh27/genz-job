'use strict'
module.exports = (sequelize, DataTypes) => {
    var Question = sequelize.define('Question', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        testId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        answerKeyId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {});

    Question.associate = function(models) {

    };
    return Question;
};