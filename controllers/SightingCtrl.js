var Sighting = require('../models/SightingModel');

module.exports = {

	createSighting: function(req, res) {
		newSighting = new Sighting(req.body);
		newSighting.save(function(err, response) {
			if(err) {
				res.status(500).json(err);
			} else {
				res.json(response);
				console.log('new sighting!');
			}
		});
	},

	getSighting: function(req, res) {
		Sighting.find(req.body)
		.exec(function(err, response) {
			if(err) {
				res.sendStatus(500);
			} else {
				res.json(response);
				console.log('gotcha');
			}
		});
	},

	editSighting: function(req, res) {
		Sighting.findByIdAndUpdate(req.params.id, req.body, function(err, response) {
			if(err) return res.sendStatus(500);
			res.send(response);
			console.log('updated!');
		});
	},

	deleteSighting: function(req, res) {
		Sighting.findByIdAndRemove(req.params.id, function(err, response) {
			if (err) return res.sendStatus(500);
			res.send(response);
			console.log('deleted!');
		});
	}
};