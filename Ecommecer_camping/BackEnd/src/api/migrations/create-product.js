"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      NAME: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      STOCK: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      PRICE:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      IMAGE_PATH: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      CLOUDY_IMAGE_ID: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CREATED_DATE: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      CREATED_BY: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      MODIFIED_DATE: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      MODIFIED_BY: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      IS_DELETED: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },

      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
