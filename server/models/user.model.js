'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    UserName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      validate: {
          isEmail: true
      }
    },
    UserGuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4 
    },
    LastActivyDate: DataTypes.DATE,
    CreatedDate: DataTypes.DATE
  }, {
    timestamps: false
  });
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Role, { through: models.UserRole});
    User.belongsToMany(models.Job, { through: models.Bookmark });
    User.belongsToMany(models.Job, { through: models.JobApplication });
    User.hasMany(models.UserProperty);
    // User.hasMany(models.Article);
    User.belongsToMany(User,{ through: models.Following, as: "Followee", foreignKey: "FollowerId" });
    User.belongsToMany(User, { through: models.Following, as: "Follower", foreignKey: "UserId" });
  };
  return User;
};