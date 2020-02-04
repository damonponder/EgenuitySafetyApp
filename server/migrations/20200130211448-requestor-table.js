"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Requestors", {
      requestorid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      phonenum: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      accesslevel: {
        type: Sequelize.INTEGER,
        references: {
          model: "access_levels",
          key: "id"
        },
        allowNull: false
      },
      contractorid: {
        type: Sequelize.INTEGER,
        references: {
          model: "Contractors",

          key: "contractorid"
        }
      },
      operatorid: {
        type: Sequelize.INTEGER,
        references: {
          model: "Operators",
          key: "operatorid"
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Requestors", {
        requestorid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }
    });
  }
}
