create database exoVues;
use exoVues;
create view listeTickets1 as (select id_ticket, date_ticket, nom_vendeur, prenom_vendeur from ticket
inner join vendeur on ticket.id_vendeur = vendeur.id_vendeur);

create view listeTickets2 as (select date_ticket, nom_vendeur, prenom_vendeur, nom_produit, prix_produit, quantite
from ajouter
inner join produit on ajouter.id_produit = produit.id_produit
inner join listeTickets1 on ajouter.id_ticket = listeTickets1.id_ticket);

drop view listeTickets3;

create view listeTickets3 as (select nom_produit, prix_produit, sum(prix_produit*quantite) as 'C.A Global'
from ajouter
inner join produit on ajouter.id_produit = produit.id_produit
group by ajouter.id_produit);