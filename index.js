var request = require('request');
var Handlebars = require('handlebars');


module.exports = function (module_name, type, format) {
	var msg = {
		markdown:Handlebars.compile("[![npm version](https://badge.fury.io/{{type}}/{{name}}.svg)](http://badge.fury.io/{{type}}/{{name}})")
	}
	var url = 'http://badge.fury.io/'+ type +'/' + module_name + '.json';
	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log(body) // Print the google web page.
			msg[format]
			
			var data = { "name": module_name, "type": type};
			var result = msg[format](data);
			
			console.log(result);
	  }
	})
}
