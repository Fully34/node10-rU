
//============================== requirements ==============================//
        
var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

//============================== config ==============================//
        
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

//============================== routing ==============================//

// homepage 
app.get('/', indexController.index);

//ajax load
app.post('/countries', indexController.getCountries);

//ajax search
app.post('/search', indexController.searchCountry);

//============================== server/db ==============================//

 
var server = app.listen(9001, function() {
	console.log('Express server listening on port ' + server.address().port);
});
