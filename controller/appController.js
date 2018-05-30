var express    = require("express");
var mysql      = require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'world'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});




exports.home = function(req, res) {

  var objMenu =  [{
    "id" : "1",
    "Title" : "Hola mundo!",
  }];

  connection.query('SELECT * from city', function(err, rows, fields) {
    if (!err)
      console.log('The solution is: ', rows);
    else
      console.log('Error while performing Query.');
  });

  connection.end();

  
 res.send(objMenu);
};
