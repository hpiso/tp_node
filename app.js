var mysql = require("mysql");
var dbConfig = require('./config/database');

// First you need to create a connection to the db
var con = mysql.createConnection(dbConfig);

// Question a)
con.query('SELECT distinct numHotel FROM chambre where prix > 50',function(err,rows){
    if(err) throw err;

    console.log('\nQuestion a):\n');
    console.log(rows);
});

// Question b)
//todo

// Question c)
con.query('SELECT distinct nomHotel FROM hotel LEFT JOIN chambre ON chambre.numHotel = hotel.numHotel where prix > 50',function(err,rows){
    if(err) throw err;

    console.log('\nQuestion c):\n');
    console.log(rows);
});

// Question d)
con.query('SELECT * FROM hotel',function(err,rows){
    if(err) throw err;

    console.log('\nEnumérer tous les hôtels :\n');
    console.log(rows);
});

// Question e)
con.query('SELECT * FROM chambre WHERE prix < 50',function(err,rows){
    if(err) throw err;

    console.log('\nEnumérer toutes les chambres d\'un lit de prix inférieur à 50$ la nuit :\n');
    console.log(rows);
});

// Question f)
con.query('SELECT nomHote, adresseHote FROM hote',function(err,rows){
    if(err) throw err;

    console.log('\nEnumérer les noms et les villes de tous les hôtes :\n');
    console.log(rows);
});

// Question g)
con.query('SELECT c.prix, c.type FROM chambre as c LEFT JOIN hotel as h ON h.numHotel = c.numHotel WHERE h.nomHotel = "Hôtel du Gouverneur"',function(err,rows){
    if(err) throw err;

    console.log('\nEnumérer le prix et le type de toutes les chambres de l\'hôtel du Gouverneur :\n');
    console.log(rows);
});

// Question g)
con.query('SELECT c.prix, c.type FROM chambre as c LEFT JOIN hotel as h ON h.numHotel = c.numHotel WHERE h.nomHotel = "Hôtel du Gouverneur"',function(err,rows){
    if(err) throw err;

    console.log('\nEnumérer le prix et le type de toutes les chambres de l\'hôtel du Gouverneur :\n');
    console.log(rows);
});

// Question h)
con.query('SELECT DISTINCT h.nomHote FROM hote as h LEFT JOIN reservation as r ON h.numHote = r.numHote LEFT JOIN hotel as hl ON hl.numHotel = r.numHotel WHERE r.dateDebut < CURDATE() AND r.dateFin > CURDATE() AND hl.nomHotel = "Hôtel du Gouverneur";',function(err,rows){
    if(err) throw err;

    console.log('\nEnumérer les hôtes qui résident actuellement à l\'hôtel le Gouverneur :\n');
    console.log(rows);
});

// Question i)
con.query('select DISTINCT chambre.numChambre, chambre.type, chambre.prix, hote.nomHote, reservation.dateDebut, reservation.dateFin from chambre'
    +' JOIN hotel ON hotel.numHotel = chambre.numHotel'
    +' JOIN reservation ON reservation.numChambre = chambre.numChambre'
    +' JOIN hote ON hote.numHote = reservation.numHote'
    +' where hotel.nomHotel = "Hôtel du Gouverneur"'
    +' AND CURDATE() BETWEEN reservation.dateDebut AND reservation.dateFin',function(err,rows){
    if(err) throw err;

    console.log('\nEnumérer les détails de toutes les chambres de l\'hotel gouverneur, y compris le nom des hotes qui y resident, si les chambres sont occupées :\n');
    console.log(rows);
});

// Question j)
//todo

con.end(function(err) {
    if(err) throw err;
});