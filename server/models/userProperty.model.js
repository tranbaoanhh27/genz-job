'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserProperty = sequelize.define('UserProperty', {
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Value: {
        type: DataTypes.STRING
    }
  }, {
    timestamps: false
  });
  UserProperty.associate = function(models) {
    UserProperty.belongsTo(models.User);
  };
  return UserProperty;
};