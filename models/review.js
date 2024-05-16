"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.associate = function (models) {
        // Relacionamento com a tabela Films
        Review.belongsTo(models.Film, {
          foreignKey: "filmId",
          as: "film",
          onDelete: "CASCADE"
        });
        // Relacionamento com a tabela Users
        Review.belongsTo(models.User, {
          foreignKey: "userId",
          as: "user",
          onDelete: "CASCADE"
        });
      };
    }
  }
  Review.init(
    {
      filmId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      review_text: DataTypes.TEXT,
      review_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
