const mongoose = require("mongoose");

const movesSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Move Name is required."],
	},
	moveNumber: {
		type: String,
		required: [true, "TM/HM number is required."]
	},
	type: {
		type: String,
		required: [true, "Move Type is required."],
	},
	category: {
		type: String,
		required: [true, "Category Type is required."],
	},
	power: {
		type: Number,
		required: [true, "Move Power is required."],
		min: [0, "Power cannot be lower than 0."],
		max: [200, "Invalid entry: Power too high."],
	},
	powerpoint: {
		type: Number,
		min: [1, "PP cannot be lower than 1."],
		max: [50, "Invalid entry: Attack too high."],
	},
	accuracy: {
		type: Number,
		min: [1, "Accuracy cannot be lower than 1."],
		max: [100, "Invalid entry: Accuracy too high."],
	},
	description: {
		type: String,
		required: [true, "Move Description is required."],
	},
});

module.exports = mongoose.model("Moves", movesSchema);
