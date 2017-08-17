var mysql = require("mysql");
var port = process.env.PORT || 8000;
var express = require('express');
var server = express();
var connection;

// = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });
//
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

if (process.env.JAWSDB_URL) {

  connection = mysql.createConnection(process.env.JAWSDB_URL);

}

else {

  connection= mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

}

connection.connect();
module.exports = connection;

server.listen(port, function() {
    console.log("App is running on port " + port);
});
