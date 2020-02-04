"use strict";
module.exports = (sequelize, DataTypes) => {
  const Contractor = sequelize.define(
    "Contractor",
    {
      contractorid: { type: DataTypes.INTEGER, primarykey: true },
      contractorname: DataTypes.STRING
    },
    {}
  );
  Contractor.associate = function(models) {
    Contractor.hasMany(models.Rig);
    Contractor.belongsTo(models.Requestor, { foreignKey: "operatorid" });
  };
  return Contractor;
};
