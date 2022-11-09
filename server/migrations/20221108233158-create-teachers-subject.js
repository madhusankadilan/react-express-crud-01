'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('TeachersSubjects', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            teacherId: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: 'Teachers',
                    key: 'id'
                },
                allowNull: false,
                onDelete: 'CASCADE',
            },
            subjectId: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: 'Subjects',
                    key: 'id'
                },
                allowNull: false,
                onDelete: 'CASCADE',
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('TeachersSubjects');
    }
};