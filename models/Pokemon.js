const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
	information: [
		{
			name: {
				type: String,
				required: true,
			},
			dexNumber: {
				type: Number,
				required: true,
			},
			primaryType: {
				type: String,
				required: true,
			},
			secondaryType: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: true,
			},
			devolvedForm: String,
			evolvedForm: String,
		},
	],
	stats: [
		{
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
	],
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
