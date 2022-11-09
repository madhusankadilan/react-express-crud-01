'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return await queryInterface.bulkInsert('Classes', [{
                name: 'Class 1A',
                levelId: 1,
                teacherId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Class 4D',
                levelId: 4,
                teacherId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Class 5E',
                levelId: 5,
                teacherId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Class 3C',
                levelId: 3,
                teacherId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Class 2B',
                levelId: 2,
                teacherId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.bulkDelete('Classes', null, {});
    }
};