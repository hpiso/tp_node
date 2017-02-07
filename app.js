var mysql = require("mysql");
var dbConfig = require('./config/database');

// First you need to create a connection to the db
var con = mysql.createConnection(dbConfig);

con.query('SELECT * FROM employees',function(err,rows){
    if(err) throw err;

    console.log('Data received from Db:\n');
    console.log(rows);
});

con.end(function(err) {
    if(err) throw err;
});