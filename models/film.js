"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relacionamento com a tabela Directors
      Film.belongsTo(models.Director, {
        foreignKey: "directorId",
        as: "director"
      });
      // Relacionamento com a tabela Reviews
      Film.hasMany(models.Review, {
        foreignKey: "filmId",
        as: "reviews"
      });
    }
  }
  Film.init(
    {
      title: DataTypes.STRING,
      release_year: DataTypes.INTEGER,
      genre: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      synopsis: DataTypes.TEXT,
      directorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Film",
    }
  );
  return Film;
};
