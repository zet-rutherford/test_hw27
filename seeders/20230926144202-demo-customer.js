'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('customers', [{
       name: "Nguyen Van A",
       email: "nva@gmail.com",
       user_id:1,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      name: "Nguyen Ngoc B",
      email: "nnb@gmail.com",
      user_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Nguyen Trung C",
      email: "ntc@gmail.com",
      user_id:1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Tran Thi D",
      email: "ttd@gmail.com",
      user_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Dang Van E",
      email: "dve@gmail.com",
      user_id:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);

  },

  async down (queryInterface, Sequelize) {


     await queryInterface.bulkDelete('customers', null, {});
     
  }
};
