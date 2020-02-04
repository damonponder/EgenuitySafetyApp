"use strict";
module.exports = (sequelize, DataTypes) => {
  const Operator = sequelize.define(
    "Operator",
    {
      operatorid: { type: DataTypes.INTEGER, primarykey: true },
      operatorname: DataTypes.STRING
    },
    {}
  );
  Operator.associate = function(models) {
    Operator.hasMany(models.Contractor);
    Operator.belongsTo(models.Requestor, { foreignKey: "operatorid" });
  };
  return Operator;
};
