var mongoose = require('mongoose');

var ChefSchema = new mongoose.Schema({
	first_name: { type: String },
	last_name: { type: String },
	email: { type: String },
	password: { type: String },
	bio: { type: String },
	location: { type: String },
	events: { type: Array },
	reviews: { type: Array }
});

mongoose.model('Chef', ChefSchema);