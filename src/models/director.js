"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Director extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relacionamento com a tabela Films
      Director.hasMany(models.Film, {
        foreignKey: "directorId",
        as: "films"
      });
    }
  }
  Director.init(
    {
      name: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      biography: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Director",
    }
  );
  return Director;
};
