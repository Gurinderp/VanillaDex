// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Models
const Pokemon = require("./models/Pokemon");

// dotenv configuration method
dotenv.config();

// capturing express() in app variable
const app = express();

// telling express to handle json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setting development environment variables
const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT || 3000;

// mongoose connecting to MongoDB database
mongoose
	.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => console.log("Connected to Database"))
	.catch((err) => console.log(err));

// Beginning app on specified port
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

// GET request for home page
app.get("/", function (req, res) {
	res.send("Hello PokeWorld!");
});

// GET request for pokedex page
app.get("/pokedex", function (req, res) {
	res.send("Hello Pokedex!");
});

// GET request for pokemon list
app.get("/pokedex/pokemon/api", async function (req, res) {
	try {
		const pokemonList = await Pokemon.find();
		res.json(pokemonList);
	} catch (err) {
		res.send(Pokemon.find());
	}
});

//
// Need GET request to search in Pokedex
//

// POST request to register pokemon from front end
app.post("/pokedex/register/poke_submission", async function (req, res) {
	const poke = new Pokemon({
		information: {
			// Is *.information.* necessary?
			name: req.body.information.name,
			dexNumber: req.body.information.dexNumber,
			primaryType: req.body.information.primaryType,
			// Not required
			secondaryType: req.body.information.secondaryType,
			description: req.body.information.description,
			// Not required
			devolvedForm: req.body.information.devolvedForm,
			// Not required
			evolvedForm: req.body.information.evolvedForm,
		},
		stats: {
			// check *.stats.*
			health: req.body.stats.health,
			attack: req.body.stats.attack,
			specialAttack: req.body.stats.specialAttack,
			defense: req.body.stats.defense,
			specialDefense: req.body.stats.specialDefense,
			speed: req.body.stats.speed,
		},
	});
	try {
		const newPokemon = await poke.save();
		res.send(newPokemon);
	} catch (err) {
		res.send(req.body);
		console.log(err);
	}
});

//
//
//
