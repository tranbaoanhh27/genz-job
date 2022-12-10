'use strict';

module.exports = (sequelize, DataTypes) => {
  var ArticleReaction = sequelize.define('ArticleReaction', {
    ReactorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ArticleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ReactionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  ArticleReaction.associate = function(models) {
    // associations can be defined here
    ArticleReaction.belongsTo(models.User, { foreignKey: 'ReactorId', targetKey: 'id'});
    //Notification.belongsTo(models.User, { foreignKey: 'ArticleId', targetKey: 'id'});
  };
  return ArticleReaction;
};