'use strict';

module.exports = (sequelize, DataTypes) => {
  var Notification = sequelize.define('Notification', {
    RecipientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    SenderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  Notification.associate = function(models) {
    // associations can be defined here
    Notification.belongsTo(models.User, { foreignKey: 'RecipientId', targetKey: 'id'});
    Notification.belongsTo(models.User, { foreignKey: 'SenderId', targetKey: 'id'});
  };
  return Notification;
};