"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Contractors", {
      contractorid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contractorname: {
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
      operatorid: {
        type: Sequelize.INTEGER,
        references: {
          model: "Operators",
          key: "operatorid"
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {}
};
