const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	trainerName: {
		type: String,
		required: [true, "Trainer Name is required."],
	},
    email: {
        type: String,
        required: [true, "Email is required."],
    },
    trainerImage: {
        type: String,
        required: [true, "Trainer Image is required."],
    },
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);
