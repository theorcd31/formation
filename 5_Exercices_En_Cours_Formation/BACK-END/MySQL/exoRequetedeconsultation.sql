use exo2ecommerce;

-- Exercice Requête de consultation

-- Afficher toute les catégorie avec (nom_categorie)
SELECT nom_categorie FROM categorie;

-- Afficher tous les vendeur avec (alias nom, alias prénom) trié par nom et prénom ordre croissant
SELECT nom_vendeur as nom, prenom_vendeur as prenom 
FROM vendeur ORDER BY nom ASC, prenom ASC;

-- -Afficher la liste des tickets avec (date_ticket) du mois de décembre
SELECT date_ticket as `date` 
FROM ticket where month(date_ticket) = 11;

-- Afficher la liste des produits dont le prix est supérieur à 2 € et inférieur à 10 €  avec (nom_produit, description_produit, prix_produit)
select nom_produit, description_produit, prix_produit 
from produit where prix_produit between 2 AND 10;

-- Afficher la liste des produits avec (nom_produit, prix_produit, nom_categorie)
select nom_produit, prix_produit, nom_categorie from produit
INNER JOIN categorie ON produit.id_categorie = categorie.id_categorie;

-- juste pour check toute la table
select * from produit;

-- -Afficher la liste des produits avec (nom_produit, description_produit, prix_produit, nom_categorie) de type alimentaire (nom_categorie)
select nom_produit, description_produit, prix_produit, nom_categorie
from produit INNER JOIN categorie ON produit.id_categorie = categorie.id_categorie 
WHERE nom_categorie = 'alimentaire';

-- Afficher la liste des tickets avec (date_ticket, nom_vendeur, prenom_vendeur)
select date_ticket, nom_vendeur, prenom_vendeur from ticket
INNER JOIN vendeur ON ticket.id_vendeur = vendeur.id_vendeur ;

-- Afficher la liste des produits vendus sur le ticket (id_ticket = 1)  avec (nom_produit, prix_produit, quantite)
select nom_produit, prix_produit, quantite from ajouter 
INNER JOIN produit on ajouter.id_produit = produit.id_produit
INNER JOIN ticket on ajouter.id_ticket = ticket.id_ticket;

alter table produit 
auto_increment = 8


