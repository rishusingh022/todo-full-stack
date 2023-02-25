"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class lists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lists.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      name: DataTypes.STRING,
      tasks: DataTypes.JSON(),
      createdAt: {
        field: "createdAt",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        field: "updatedAt",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },

    {
      sequelize,
      modelName: "lists",
    }
  );
  return lists;
};
