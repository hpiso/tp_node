-- Create Database
CREATE DATABASE IF NOT EXISTS tp_node;
USE tp_node;

-- Create tables
DROP TABLE IF EXISTS hotel, hote, chambre, reservation;
CREATE TABLE hotel (numHotel int NOT NULL PRIMARY KEY, nomHotel VARCHAR(100), ville VARCHAR(100));
CREATE TABLE hote (numHote int NOT NULL PRIMARY KEY, nomHote VARCHAR(100), adresseHote VARCHAR(100));
CREATE TABLE chambre (numChambre int NOT NULL PRIMARY KEY, type VARCHAR(100), prix int, numHotel int);
CREATE TABLE reservation (numHotel int, numHote int, numChambre int, dateDebut DATE, dateFin DATE);

-- Fixtures hotel
INSERT INTO hotel (numHotel, nomHotel, ville)
VALUES
(1, 'Ritz','Paris'),
(2, 'Hôtel Catalonia','Barcelone'),
(3, 'Park Hyatt','Sydney'),
(4, 'Marina bay sand','Singapour'),
(5, 'Hôtel du Gouverneur','New York');

-- Fixtures hote
INSERT INTO hote (numHote, nomHote, adresseHote)
VALUES
(1, 'Bernard', '1 rue de la patisserie'),
(2, 'Joseph','10 rue croix de bois'),
(3, 'Chuck Norris','99 rue du beau gosse'),
(4, 'Casper','Boulevard du fantome');

-- Fixtures chambre
INSERT INTO chambre (numChambre, type, prix, numHotel)
VALUES
(1, 'Petite chambre', 19, 2),
(2, 'Grande chambre', 99, 3),
(3, 'Suite', 199, 1),
(4, 'Palace', 999, 4),
(5, 'Queen suite', 8500, 5),
(6, 'Prestigious site', 12800, 5),
(7, 'Majestic room', 18200, 5);

-- Fixtures reservation
INSERT INTO reservation (numHotel, numHote, numChambre, dateDebut, dateFin)
VALUES
(2, 1, 2, '2017-02-10', '2017-02-20'),
(2, 2, 2, '2017-02-15', '2017-02-20'),
(3, 3, 4, '2017-02-10', '2017-03-20'),
(1, 1, 4, '2017-02-10', '2017-03-20'),
(1, 2, 4, '2017-02-10', '2017-03-20'),
(1, 2, 4, '2017-02-10', '2017-03-20'),
(4, 4, 1, '2017-02-10', '2017-03-20'),
(4, 4, 1, '2017-02-10', '2017-03-20'),
(2, 4, 3, '2017-02-10', '2017-03-20'),
(3, 3, 3, '2017-02-10', '2017-03-20'),
(5, 1, 3, '2017-02-10', '2017-03-20'),
(5, 3, 2, '2017-02-10', '2017-03-20'),
(5, 3, 4, '2017-02-10', '2017-03-20'),
(5, 4, 3, '2017-02-10', '2017-03-20');