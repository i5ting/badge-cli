#!/usr/bin/env node

/**
 * Module dependencies.
 */
function isDefined(x) { return x !== null && x !== undefined; } 


var program = require('commander');

program
  .version('1.0.1')
	.usage(" badge -n badge-cli -f [md] -t [npm] ")
	.option('-n, --name [name]', 'npm name,for example: q')
  .option('-f, --format [format]', '可选值：url, markdown（默认值）, html, textile, rdoc, asciidoc, rst')
  .option('-t, --type [type]', '可选值：npm（默认值）, ruby    , python    , bower    , github    , nuget    , php    , cocoapods    , perl  ')
  .parse(process.argv);

var module_name = '';
if(isDefined(program.name) == true && typeof program.name == 'string' ){
	module_name = program.name;
}else{
	console.log('没有知道模块名称，请重新输入,比如\n\t badge -n badge-cli -f [md] -t [npm] ');
	return;
}

var format = "markdown";
var type = "npm";


if(program.format){
	format = program.format;
}

if(program.type){
	type = program.type;
}


console.log('format = ' + format);
console.log('type = ' + type);
console.log('name = ' + module_name);

var badge = require('../index');

badge(module_name, type, format);