'use strict'
module.exports = (sequelize, DataTypes) => {
    var Answer = sequelize.define('Answer', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        questionId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {});
    
    Answer.associate = function(models) {

    };
    return Answer;
};