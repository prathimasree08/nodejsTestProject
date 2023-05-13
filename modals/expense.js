const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const User = sequelize.define("orders", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  Dish: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Table: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;