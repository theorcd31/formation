INSERT INTO categorie(nom_categorie) VALUES('alimentaire'),
('liquide'),('animalerie');

INSERT INTO produit(nom_produit, description_produit, prix_produit, id_categorie)
VALUE('pomme','pomme en sachet de 1 kilo', 1.89, 1);
INSERT INTO produit(nom_produit, description_produit, prix_produit, id_categorie)
VALUE('pain','baguette de pain', 1.10, 1);
INSERT INTO produit(nom_produit, description_produit, prix_produit, id_categorie)
VALUE('lessive','lessive ariel', 14.99, 2);
INSERT INTO produit(nom_produit, description_produit, prix_produit, id_categorie)
VALUE('lait','bouteille 1 litre',2.20, 5);
INSERT INTO produit(nom_produit, description_produit, prix_produit, id_categorie)
VALUE('tomate','sachet de 3 kilo', 4.99, 1);
INSERT INTO produit(nom_produit, description_produit, prix_produit, id_categorie)
VALUE('salade','pack de 5 sachets', 5.99, 3);
INSERT INTO vendeur(nom_vendeur, prenom_vendeur)VALUES('test1','test1'),
('test2','test2'),('test3','test3');
INSERT INTO ticket(date_ticket,id_vendeur)VALUES('2023/11/22 10:20:25',1),
('2023/11/14 08:25:36',1), ('2023/11/25 11:36:52', 2),('2023/12/01 10:14:20',3),
('2023/12/05 14:47:33',3);
INSERT INTO ajouter(id_produit,id_ticket,quantite)VALUES(1,1,5),(2,1,4),(3,2,1),(2,2,8),
(1,3,4),(2,3,5),(4,4,8),(2,4,2),(1,5,2),(5,5,7);


