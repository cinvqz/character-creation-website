const { Model, DataTypes } = require("sequelize");

class Character extends Model {}

Character.init(
  {
    title: {
      type: DataType.STRING,
      allowNull: false,
    },
    text: {
      type: DataType.STRING,
      allowNull: false,
    },
    user_id: {
      references: {
        key: "id",
        model: "User",
      },
    },
  },
  {
    freezeTableName: false,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Character;