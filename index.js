var request = require('request');
var Handlebars = require('handlebars');

var msg = {
	url: 			Handlebars.compile("https://badge.fury.io/{{type}}/{{name}}.svg"),
	markdown: Handlebars.compile("[![npm version](https://badge.fury.io/{{type}}/{{name}}.svg)](http://badge.fury.io/{{type}}/{{name}})"),
	html: 		Handlebars.compile("<a href='http://badge.fury.io/{{type}}/{{name}}'><img src='https://badge.fury.io/{{type}}/{{name}}.svg' alt='npm version' height='18'></a>"),
	textile: 	Handlebars.compile("!https://badge.fury.io/{{type}}/{{name}}.svg!:http://badge.fury.io/{{type}}/{{name}}"),
	rdoc: 		Handlebars.compile("{<img src='https://badge.fury.io/{{type}}/{{name}}.svg' alt='npm version' />}[http://badge.fury.io/{{type}}/{{name}}]"),
	asciidoc: Handlebars.compile("image:https://badge.fury.io/{{type}}/{{name}}.svg['npm version', link='http://badge.fury.io/{{type}}/{{name}}']"),
	rst:   		Handlebars.compile(".. image:: https://badge.fury.io/{{type}}/{{name}}.svg \n :target: http://badge.fury.io/{{type}}/{{name}}")
}

module.exports = function (module_name, type, format,verbose) {
	var _verbose = verbose;
	function log(str){
		if(_verbose == true){
			console.log(str);
		}
	}
	
	var url = 'http://badge.fury.io/'+ type +'/' + module_name + '.json';
	request(url, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    log(body) // Print the google web page.
			
			var data = { "name": module_name, "type": type};
			var result = msg[format](data);
			
			console.log(result);
	  }
	})
}
