'use strict'
module.exports = (sequelize, DataTypes) => {
    var Test = sequelize.define('Test', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
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