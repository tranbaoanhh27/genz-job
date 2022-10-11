'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserRole = sequelize.define('UserRole', {
    UserId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    RoleId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
  }, {
    timestamps: false
  });
  UserRole.associate = function(models) {
    // associations can be defined here
  };
  return UserRole;
};