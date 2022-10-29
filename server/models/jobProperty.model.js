'use strict';
module.exports = (sequelize, DataTypes) => {
    var JobProperty = sequelize.define('JobProperty', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        value: DataTypes.STRING
    }, {});
    JobProperty.associate = function(models) {
        JobProperty.belongsTo(models.User);
    }
}