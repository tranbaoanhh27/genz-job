'use strict';

const User = require('./user.model');

module.exports = (sequelize, DataTypes) => {
  var Following = sequelize.define('Following', {
    UserId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    FollowerId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
  }, {
    timestamps: false
  });
  Following.associate = function(models) {
    // associations can be defined here
  };
  return Following;
};