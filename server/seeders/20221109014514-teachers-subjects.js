'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return await queryInterface.bulkInsert('TeachersSubjects', [
            {
                teacherId: 1,
                subjectId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                teacherId: 2,
                subjectId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                teacherId: 3,
                subjectId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                teacherId: 4,
                subjectId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                teacherId: 5,
                subjectId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                teacherId: 6,
                subjectId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.bulkDelete('TeachersSubjects', null, {});
    }
};