const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

app.use(express.json());

const DB_URI = process.env.DB_URI;

mongoose
	.connect(DB_URI, {})
	.then((result) => console.log("Connected to Database"))
	.catch((err) => console.log(err));
