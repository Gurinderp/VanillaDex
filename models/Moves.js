const mongoose = require("mongoose");

const movesSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	power: {
		type: Number,
		required: true,
	},
	powerpoint: {
		type: Number,
	},
	accuracy: {
		type: Number,
	},
	description: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Moves", movesSchema);
