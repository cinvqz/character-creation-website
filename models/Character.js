const { Model, DataType } = require("sequelize");

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
        mode: "user",
      },
    },
  },
  {
    freezeTableName: false,
    underscored: true,
    modelName: "post",
  }
);
