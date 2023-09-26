'use strict';

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
   return queryInterface.bulkInsert("users",[
    {
      name: "Quang Minh",
      email: "avadakedavra_a1@outlook.com",
      password: "123456",
      role: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Arc Warden",
      email: "arc@outlook.com",
      password: "123456",
      role: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Nguyen Van X",
      email: "nvx@gmail.com",
      password: "123456",
      role: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
