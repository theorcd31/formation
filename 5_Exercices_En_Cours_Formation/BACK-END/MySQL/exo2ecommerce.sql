create database exo2ecommerce;
use exo2ecommerce;

create table produit(
id_produit INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_produit VARCHAR(50) NOT NULL,
description_produit varchar(255) NOT NULL,
prix_produit decimal NOT NULL,
id_categorie INT
)Engine=InnoDB;

create table categorie(
id_categorie INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_categorie VARCHAR(50) NOT NULL
)Engine=InnoDB;

create table vendeur(
id_vendeur INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_vendeur VARCHAR(50) NOT NULL,
prenom_vendeur varchar(50) NOT NULL
)Engine=InnoDB;

create table ticket(
id_ticket INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
date_ticket datetime NOT NULL,
id_vendeur INT
)Engine=InnoDB;

create table ajouter(
id_produit INT,
id_ticket INT,
quantite INT,
PRIMARY KEY(id_produit, id_ticket)
)Engine=InnoDB;

ALTER TABLE produit
ADD CONSTRAINT fk_completer_categorie
FOREIGN KEY (id_categorie)
REFERENCES categorie(id_categorie);

ALTER TABLE ticket
ADD CONSTRAINT fk_completer_vendeur
FOREIGN KEY (id_vendeur)
REFERENCES vendeur(id_vendeur);

alter table ajouter
add constraint fk_ajouter_produit
foreign key (id_produit)
references produit(id_produit);

alter table ajouter
add constraint fk_ajouter_ticket
foreign key (id_ticket)
references ticket(id_ticket);





