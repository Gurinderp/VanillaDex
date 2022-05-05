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
			min: 0,
			max: 151,
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
			required: true,
		},
		attack: {
			type: Number,
			required: true,
		},
		specialAttack: {
			type: Number,
			required: true,
		},
		defense: {
			type: Number,
			required: true,
		},
		specialDefense: {
			type: Number,
			required: true,
		},
		speed: {
			type: Number,
			required: true,
		},
	},
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
