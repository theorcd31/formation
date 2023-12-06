use exo2ecommerce;

INSERT INTO categorie(nom_categorie)
VALUES('alimentaire'), ('liquide'), ('animalerie');


INSERT INTO produit(nom_produit, description_produit, prix_produit, id_categorie)
VALUE('pomme', 'Esta la pomma', 2.49, 1);

INSERT INTO produit(nom_produit, description_produit, prix_produit, id_categorie)
VALUES('pomme', 'Esta la pomma', 2.49, 1), ('courgette', 'Esta la courgetta', 499.9, 1),
('chufi', 'Esta la chufi', 3.1, 2), ('romariz', 'Esta el romariz del ritto', 49.9, 3), 
('BurgerTommys', 'Me gusta el burger', 13.5, 1);

describe produit;

SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE produit;
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO vendeur(nom_vendeur, prenom_vendeur)
VALUES ('Sardou', 'Michel'), ('Hallydev', 'Johnny'), ('Brogniart', 'Denis');

INSERT INTO ticket (date_ticket, id_vendeur)
VALUES ('2023/12/05 16:55:36', 1), ('2023/12/06 15:45:36', 2), ('2023/12/04 12:15:36', 3),
('2023/11/14 13:28:03', 1), ('2023/10/13 14:39:12', 2);





