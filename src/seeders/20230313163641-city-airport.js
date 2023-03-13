'use strict';

const { use } = require('../routes');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('airports',[{
      name:"Kempegowda International Airport",
      cityID:"9",
      createdAt:new Date(),
      updatedAt:new Date()

    },

    {
      name:"air field",
      cityID:"9",
      createdAt:new Date(),
      updatedAt:new Date()

    },

    {
      name:"hindustan aeronuatics",
      cityID:"9",
      createdAt:new Date(),
      updatedAt:new Date()

    },
    
    {
      name:"chhatripati shivaji maharaj",
      cityID:"2",
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name:"rajiv gandhi",
      cityID:"2",
      createdAt:new Date(),
      updatedAt:new Date()
    }
  ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
