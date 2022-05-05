const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
	information: {
		name: {
			type: String,
			required: [true, "Pokemon Name is required."],
		},
		dexNumber: {
			type: Number,
			required: [true, "Pokemon Dex number is required."],
			min: [1, "Dex Number must be above Zero."],
			max: [151, "First generation only goes up to 151."],
		},
		primaryType: {
			type: String,
			required: [true, "Pokemon Primary type is required."],
		},
		secondaryType: {
			type: String,
		},
		description: {
			type: String,
			required: [true, "Pokemon Description is required."],
		},
		devolvedForm: String,
		evolvedForm: String,
	},
	stats: {
		health: {
			type: Number,
			required: [true, "Pokemon Health is required."],
			min: [1, "Health cannot be lower than 1."],
			max: [500, "Invalid entry: Health too high."],
		},
		attack: {
			type: Number,
			required: [true, "Pokemon Attack is required."],
			min: [1, "Attack cannot be lower than 1."],
			max: [500, "Invalid entry: Attack too high."],
		},
		specialAttack: {
			type: Number,
			required: [true, "Pokemon Special Attack is required."],
			min: [1, "Special Attack cannot be lower than 1."],
			max: [500, "Invalid entry: Special Attack too high."],
		},
		defense: {
			type: Number,
			required: [true, "Pokemon Defense is required."],
			min: [1, "Defense cannot be lower than 1."],
			max: [500, "Invalid entry: Defense too high."],
		},
		specialDefense: {
			type: Number,
			required: [true, "Pokemon Special Defense is required."],
			min: [1, "Special Defense cannot be lower than 1."],
			max: [500, "Invalid entry: Special Defense too high."],
		},
		speed: {
			type: Number,
			required: [true, "Pokemon Speed is required."],
			min: [1, "Speed cannot be lower than 1."],
			max: [500, "Invalid entry: Speed too high."],
		},
	},
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
