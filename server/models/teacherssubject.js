'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TeachersSubject extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            TeachersSubject.belongsTo(models.Teacher, {
                foreignKey: 'teacherId',
                as: 'teachers'
            });
            TeachersSubject.belongsTo(models.Subject, {
                foreignKey: 'subjectId',
                as: 'subjects'
            });
        }
    }
    TeachersSubject.init({
        teacher: DataTypes.INTEGER,
        subject: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'TeachersSubject',
    });
    return TeachersSubject;
};