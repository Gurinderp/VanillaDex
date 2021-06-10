// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ejs = require("ejs");

// Models
const Pokemon = require("./models/Pokemon");

// Dotenv configuration method
dotenv.config();

// Capturing express() in app variable
const app = express();

// Telling express to handle json data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set paths for use
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/public/styles"));
app.use("/images", express.static(__dirname + "/public/assets"));

// Telling express to use the ejs engine
app.set("view engine", "ejs");

// Setting development environment variables
const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT || 3000;

// Mongoose connecting to MongoDB database
mongoose
	.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => console.log("Connected to Database"))
	.catch((err) => console.log(err));

// Beginning app on specified port
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

// GET request for home page -- index.ejs
app.get("/", function (req, res) {
	res.render("index");
});

// GET request for pokedex page
app.get("/pokedex", function (req, res) {
	Pokemon.find(function (err, pokemon) {
		if (err) {
			console.log(err);
		} else {
			res.render("pokedex", { pokemon: pokemon });
		}
	});
});

// GET request for moves page
app.get("/moves", function (req, res) {
	res.render("moves");
});

//
// Old code -- needs refactoring for ejs
//

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
// Still works with register.html as back up
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
