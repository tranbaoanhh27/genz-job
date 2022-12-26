'use strict';
module.exports = (sequelize, DataTypes) => {
    var Job = sequelize.define('Job', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            defaultValue: "This is an opening position in my company."
        },
        datePosted: DataTypes.DATE,
        closingDate: DataTypes.DATE,
        salary: DataTypes.INTEGER,
        JobGuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        }
    }, {});
    Job.associate = function(models) {
        Job.belongsTo(models.User, {
            as: "Author",
            foreignKey: 'authorId'
        });
        Job.hasMany(models.JobProperty, {
            foreignKey: 'jobId'
        });
        Job.belongsToMany(models.User, { through: models.Bookmark });
        Job.belongsToMany(models.User, { through: models.JobApplication });
        Job.hasMany(models.Bookmark)
    };
    return Job;
}