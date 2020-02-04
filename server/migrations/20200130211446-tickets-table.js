"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tickets", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      zendesk_id: Sequelize.INTEGER,
      subject: { type: Sequelize.STRING, allowNull: true },
      description: { type: Sequelize.STRING, allowNull: true },
      priority: { type: Sequelize.STRING, allowNull: true },
      status: { type: Sequelize.STRING, allowNull: true },
      assignee: { type: Sequelize.STRING, allowNull: true },
      escalationlevel: { type: Sequelize.STRING, allowNull: true },
      region: { type: Sequelize.STRING, allowNull: true },
      resolution: { type: Sequelize.STRING, allowNull: true },
      incident: { type: Sequelize.STRING, allowNull: true },
      category: { type: Sequelize.STRING, allowNull: true },
      operator: { type: Sequelize.STRING, allowNull: true },
      contractor: { type: Sequelize.STRING, allowNull: true },
      rig: { type: Sequelize.STRING, allowNull: true },
      updatedAt: { type: Sequelize.DATE, allowNull: true },
      createdAt: { type: Sequelize.DATE, allowNull: true },
      incidentDate: { type: Sequelize.DATE, allowNull: true }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Tickets");
  }
};
