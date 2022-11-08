'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Teacher extends Model {
        static associate(models) {
            // define association here
        }
    }
    Teacher.init({
        name: DataTypes.STRING,
        subject: DataTypes.STRING,
        email: DataTypes.STRING,
        contactNumber: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Teacher',
    });
    return Teacher;
};