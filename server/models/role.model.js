'use strict';
module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define('Role', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    guid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4 
    }
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
  };
  return Role;
};