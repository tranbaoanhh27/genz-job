'use strict'
module.exports = (sequelize, DataTypes) => {
    var Test = sequelize.define('Test', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        period: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    }, {});

    Test.associate = function(models) {
        
    };
    return Test;
};