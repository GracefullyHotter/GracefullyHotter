const Sequelize = require("sequelize")
const db = require("../db")

const Sauce = db.define("sauce", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	imageURL: {
		type: Sequelize.STRING,
		allowNull: false,
		defaultValue: "",
	},
	pepper: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	description: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	userRating: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},
	price: {
		type: Sequelize.FLOAT,
		allowNull: false,
	},
})

module.exports = Sauce
