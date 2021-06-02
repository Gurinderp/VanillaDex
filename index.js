// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

// Models
const Pokemon = require("./models/Pokemon");

// dotenv configuration method
dotenv.config();

// capturing express() in app variable
const app = express();

app.use("/", express.static(__dirname + "frontend"));

// telling express to handle json data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
			name: req.body.name,
			dexNumber: req.body.dexNumber,
			primaryType: req.body.primaryType,
			secondaryType: req.body.secondaryType, // Not required
			description: req.body.description,
			devolvedForm: req.body.devolvedForm, // Not required
			evolvedForm: req.body.evolvedForm, // Not required
		},
		stats: {
			health: req.body.health,
			attack: req.body.attack,
			specialAttack: req.body.specialAttack,
			defense: req.body.defense,
			specialDefense: req.body.specialDefense,
			speed: req.body.speed,
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
