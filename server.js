
// Modules
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Controllers
var SightingCtrl = require('./controllers/SightingCtrl');


// Constants
var port = 8989;
var mongoUri = 'mongodb://localhost:27017/mini-birds-mongoose';


// Express
var app = express();
app.use(cors());
app.use(bodyParser.json());


app.post('/', SightingCtrl.createSighting);

app.get('/', SightingCtrl.getSighting);

app.put('/:id', SightingCtrl.editSighting);

app.delete('/:id', SightingCtrl.deleteSighting);



mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
	console.log('connected to mongo', mongoUri);
});


app.listen(port, function(){
	console.log('ready, go on', port);
});