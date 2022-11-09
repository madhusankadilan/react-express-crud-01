'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return await queryInterface.bulkInsert('Subjects', [{
                name: 'Science',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Mathematics',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Social Studies',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Character and Citizenship Education',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'English Language',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Physical Education',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.bulkDelete('Subjects', null, {});
    }
};