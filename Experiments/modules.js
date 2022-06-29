//CORE MODULES - console, fs, os

// var fs = require('fs')
// fs.readFile("./text.txt", function(err, data){
//     if(err)
//         console.log("Error in reading file");
//     else
//         console.log(data);
// })

//var fs = require('fs')
// fs.readFile("./text.txt", "utf-8", function(err, data){
//     if(err)
//         console.log("Error in reading file");
//     else
//         console.log(data);
// })

// var fs = require('fs')
// fs.readFile("./text.txt", "utf-8", function(err, data){
//     if(err)
//         console.log("Error in reading file");
//     else
//         console.log(data.toUpperCase());
// })

// var os = require('os')
// console.log(os.hostname())
// console.log(os.release())
// console.log(os.homedir())
// console.log(os.type())

//npm Modules

//var cowsay = require("cowsay");
// console.log(cowsay.say({
//     text : "Example text"
// }));
// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));
// var cha = require("chalk")
// console.log(cha.blue("Hello world!"));

//User defined modules
// var cal = require('./calc.js')
// console.log(cal.add(12, 13))
// console.log(cal.sub(12, 13))
// console.log(cal.mul(12, 13))
// cal.div(12, 2, (err, result) =>{
//     if(err)
//         console.log(err)
//     else
//         console.log(result)
// })

// cal.div(12, 0, (err, result) =>{
//     if(err)
//         console.log(err)
//     else
//         console.log(result)
// })

// var book = {title : "Core Java", autho : "Herbert Schildt", price : 500}
// console.log(book)
// var jsonBook = JSON.stringify(book)
// console.log(jsonBook)
// var bookobj = JSON.parse(jsonBook)
// for(ele in bookobj)
//     console.log(ele + ":" + bookobj[ele])

// Chalk module

// const chalk = require('chalk');
// const log = console.log;

//  Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));
//  Compose multiple styles using the chainable API (cascaded function call)
// log(chalk.blue.bgRed.bold('Hello world!'));

//  Pass in multiple arguments
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

//  Nest styles of the same type even (color, underline, background)
// log(chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold('with a blue substring') +
// 	' that becomes green again!'
// ));


//  Nest styles
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));