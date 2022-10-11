'use strict';
module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define('Role', {
    Title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    RoleGuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4 
    }
  }, {
    timestamps: false
  });
  Role.associate = function(models) {
    Role.belongsToMany(models.User, { through: models.UserRole});
  };
  return Role;
};