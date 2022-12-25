'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bookmark = sequelize.define('Bookmark', {
    UserId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    JobId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
  }, {
    timestamps: false
  });
  Bookmark.associate = function(models) {
    Bookmark.belongsTo(models.User);
    Bookmark.belongsTo(models.Job);
  };
  return Bookmark;
};