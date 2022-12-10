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
    // associations can be defined here
  };
  return JobApplication;
};