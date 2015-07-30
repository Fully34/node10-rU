
//============================== requirements ==============================//
        
var countries = require('../models/countries.js');
var _ = require('underscore');

//============================== controller ==============================//
        
var indexController = {
	index: function(req, res) {
		res.render('index');
	},

    getCountries : function(req, res) {

        // console.log(countries);
        res.send(countries);
    },

    searchCountry : function(req, res) {

        var body = req.body;
        // console.log(body); //>CHECK -> body.name will be whatever is typed into the input field;

        // search name needs to be lowercased
        var name = body.name.toLowerCase();
        // console.log(body.name); //> CHECK

        // return an array that matches the search string
        var matches = _.filter(countries, function(object) {

            // need to search thru object.name.toLowerCase()
            return object.name.toLowerCase().indexOf(name) !== -1;
        });
        // console.log(matches); //> CHECK

        // send the array back to the success method on the ajax request
        res.send(matches);
    }
};

module.exports = indexController;





















