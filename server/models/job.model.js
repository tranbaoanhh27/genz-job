'use strict';
module.exports = (sequelize, DataTypes) => {
    var Job = sequelize.define('Job', {
        datePosted: DataTypes.DATE,
        closingDate: DataTypes.DATE,
        salary: DataTypes.INTEGER,
        recruiterGuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        guid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        }
    }, {});
    Job.associate = function(models) {
        Job.belongsTo(models.User)
    };
    return Job
}