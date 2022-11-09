'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return await queryInterface.bulkInsert('ClassLevels', [{
                name: 'Primary 1',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Primary 2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Primary 3',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Primary 4',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Primary 5',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Primary 6',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.bulkDelete('ClassLevels', null, {});
    }
};