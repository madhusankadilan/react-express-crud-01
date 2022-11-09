'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Classes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            levelId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'ClassLevels',
                    key: 'id'
                },
                allowNull: false,
                onDelete: 'CASCADE',
            },
            teacherId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Teachers',
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
        await queryInterface.dropTable('Classes');
    }
};