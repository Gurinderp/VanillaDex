const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

const DB_URI = process.env.DB_URI;
const PORT = process.env.PORT || 3000;

mongoose
	.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => console.log("Connected to Database"))
	.catch((err) => console.log(err));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

app.get("/", function (req, res) {
	res.send("Hello PokeWorld!");
});
