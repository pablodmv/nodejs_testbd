var express    = require("express");
var mysql      = require('mysql');






var pool = mysql.createPool({
  conectionLimit: 100,
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'world',
  debug    : false
});
//var app = express();


function handle_database(req,res) {

    pool.getConnection(function(err,connection){
        if (err) {
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }

        console.log('connected as id ' + connection.threadId);

      connection.query('SELECT * from city', function(err, rows, fields) {
            connection.release();
            if(!err) {
                res.json(rows);
            }
        });

        connection.on('error', function(err) {
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;
        });
  });
}










exports.home = function(req, res) {

  var objMenu =  [{
    "id" : "1",
    "Title" : "Hola mundo!",
  }];

handle_database(req, res);


 //res.send(objMenu);
};
