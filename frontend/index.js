const axios = require("axios");

axios
	.get("/pokedex/pokemon/api")
	.then((response) => {
		console.log(response);
	})
	.catch((err) => {
		console.log(err);
	});
