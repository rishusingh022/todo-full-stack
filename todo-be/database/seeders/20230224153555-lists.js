"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("lists", [
      {
        name: "Self Learning",
        tasks: JSON.stringify([
          {
            taskid: 1,
            title: "walk",
          },
          {
            taskid: 2,
            title: "prep your meals",
          },
          {
            taskid: 3,
            title: "meditate",
          },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Work",
        tasks: JSON.stringify([
          {
            taskid: 1,
            title: "walk",
          },
          {
            taskid: 2,
            title: "prep your meals",
          },
          {
            taskid: 3,
            title: "meditate",
          },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Home",
        tasks: JSON.stringify([
          {
            taskid: 1,
            title: "walk",
          },
          {
            taskid: 2,
            title: "prep your meals",
          },
          {
            taskid: 3,
            title: "meditate",
          },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("lists", null, {});
  },
};
