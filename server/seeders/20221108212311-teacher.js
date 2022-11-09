'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return await queryInterface.bulkInsert('Teachers', [{
                name: 'Hannah Low',
                email: 'hannah@gmail.com',
                contactNumber: '6736 3939',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Wong Sze Ting',
                email: 'wong@gmail.com',
                contactNumber: '6383 3837',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Justin Xiong',
                email: 'justin@gmail.com',
                contactNumber: '6837 3838',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Billy Tan',
                email: 'billy@gmail.com',
                contactNumber: '6777 4848',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Gao Ah Xing',
                email: 'gao@gmail.com',
                contactNumber: '6849 4942',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Chen Bing Bing',
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