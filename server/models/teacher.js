'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Teacher extends Model {
        static associate(models) {
            Teacher.belongsToMany(models.Subject, {
                foreignKey: 'teacherId',
                through: 'TeachersSubjects',
                as: 'subjects'
            });
        }
    }
    Teacher.init({
        name: DataTypes.STRING,
        subject: DataTypes.INTEGER,
        email: DataTypes.STRING,
        contactNumber: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Teacher',
    });

    return Teacher;
};