'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return await queryInterface.bulkInsert('Teachers', [{
                name: 'Hannah Low',
                subject: 'Science',
                email: 'hannah@gmail.com',
                contactNumber: '6736 3939',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Wong Sze Ting',
                subject: 'Mathematics',
                email: 'wong@gmail.com',
                contactNumber: '6383 3837',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Justin Xiong',
                subject: 'Social Studies',
                email: 'justin@gmail.com',
                contactNumber: '6837 3838',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Billy Tan',
                subject: 'Character and Citizenship Education',
                email: 'billy@gmail.com',
                contactNumber: '6777 4848',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Gao Ah Xing',
                subject: 'English Language',
                email: 'gao@gmail.com',
                contactNumber: '6849 4942',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Chen Bing Bing',
                subject: 'Physical Education',
                email: 'bingbing@gmail.com',
                contactNumber: '6968 3839',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        return await queryInterface.bulkDelete('Teachers', null, {});
    }
};