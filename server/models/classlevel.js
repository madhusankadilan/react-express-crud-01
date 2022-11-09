'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ClassLevel extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ClassLevel.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'ClassLevel',
    });
    return ClassLevel;
};