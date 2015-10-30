var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
	email: { type: String },
	name: { type: String },
	title: { type: String },
	cuisine: { type: String},
	date: { type: Date, min: Date(Date.now) },
	time: { type: String },
	location: { type: String },
	guests: { type: Number },
	price: { type: Number },
	description : {type: String},
	menu: { type: String },
	duration: { type: Number },
	url:  {type: String},
	pic:  {type: String},
	attendees: { type: Array },

	created_at: { type: Date, default: Date.now },
});

mongoose.model('Event', EventSchema);
