"use strict";
module.exports = (sequelize, DataTypes) => {
  const Access_Levels = sequelize.define(
    "Access_Levels",
    {
      access_desc: DataTypes.STRING(50)
    },
    {}
  );
  Access_Levels.associate = function(models) {
    Access_Levels.hasMany(models.Requestor, { foreignKey: "accesslevel" });
  };
  return Access_Levels;
};
