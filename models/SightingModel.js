var mongoose = require('mongoose');

var Sighting = new mongoose.Schema({
	name: { type: String, lowercase: true },
	order: { type: String, lowercase: true, maxlength: 25 },
	status: {type: String, enum: ['least concern', 'near threatened', 'extinct'], lowercase: true},
	confirmed: { type: Boolean, default: false },
	numberSeen: { type: Number, min: 0, default: 0 }
});

module.exports = mongoose.model('Sighting', Sighting);