const mongoose = require('mongoose');

const { Schema } = mongoose;

const ArtSchema = new Schema({
	title: String,
	description: String,
	contract: String,
	imageUri: String
});

module.exports = mongoose.model('Art', ArtSchema);
