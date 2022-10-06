'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserRole = sequelize.define('UserRole', {
    userGuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4 // Or DataTypes.UUIDV1
    },
    roleGuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4 
    }
  }, {});
  UserRole.associate = function(models) {
    UserRole.belongsTo(models.User);
    UserRole.belongsTo(models.Role);
  };
  return UserRole;
};