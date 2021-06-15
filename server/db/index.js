//this is the access point for all things database related!

const db = require("./db")

const User = require("./models/user")
const Sauce = require("./models/sauce")

//associations could go here!

module.exports = {
	db,
	models: {
		User,
		Sauce,
	},
}
