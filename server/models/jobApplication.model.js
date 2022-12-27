'use strict';
module.exports = (sequelize, DataTypes) => {
  var JobApplication = sequelize.define('JobApplication', {
    UserId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    JobId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    StatusId: DataTypes.INTEGER
  });
  JobApplication.associate = function(models) {
    JobApplication.belongsTo(models.User, {foreignKey: "UserId"});
  };
  return JobApplication;
};