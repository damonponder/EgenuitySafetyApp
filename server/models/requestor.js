"use strict";
module.exports = (sequelize, DataTypes) => {
  const Requestor = sequelize.define(
    "Requestor",
    {
      requestorid: { type: DataTypes.INTEGER, primarykey: true },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phonenum: DataTypes.STRING
    },
    {}
  );
  Requestor.associate = function(models) {
    Requestor.hasOne(models.Access_Levels);
  };
  return Requestor;
};
