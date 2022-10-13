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
        recruiterGuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        guid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        }
    }, {});
    return Job;
}