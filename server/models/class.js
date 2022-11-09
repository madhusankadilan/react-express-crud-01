'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Class extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Class.belongsTo(models.ClassLevel, {
                foreignKey: 'levelId',
                as: 'classLevels'
            });
            Class.hasOne(models.Teacher, {
                foreignKey: 'id',
                as: 'teachers'
            });
        }
    }
    Class.init({
        name: DataTypes.STRING,
        levelId: DataTypes.NUMBER,
        teacherId: DataTypes.NUMBER
    }, {
        sequelize,
        modelName: 'Class',
    });
    return Class;
};