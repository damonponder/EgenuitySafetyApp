"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tickets = sequelize.define("Tickets", {
    zendesk_id: { type: DataTypes.INTEGER, primarykey: true },
    subject: DataTypes.STRING,
    description: DataTypes.STRING,
    priority: DataTypes.STRING,
    status: DataTypes.STRING,
    assignee: DataTypes.STRING,
    region: DataTypes.STRING,
    resolution: DataTypes.STRING,
    incident: DataTypes.STRING,
    category: DataTypes.STRING,
    escalationlevel: DataTypes.STRING,
    //   resolutionDate: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    contractor: DataTypes.STRING,
    operator: DataTypes.STRING,
    rig: DataTypes.STRING,
    incidentDate: DataTypes.DATE
  });
  Tickets.removeAttribute("id");
  Tickets.associate = function(models) {
    // associations can be defined here
  };
  return Tickets;
};
