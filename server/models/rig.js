"use strict";
module.exports = (sequelize, DataTypes) => {
  const Rig = sequelize.define(
    "Rig",
    {
      rigid: { type: DataTypes.INTEGER, primarykey: true },
      rigname: DataTypes.STRING,
      region: DataTypes.STRING
    },
    {}
  );
  Rig.associate = function(models) {
    // associations can be defined here
  };
  return Rig;
};
