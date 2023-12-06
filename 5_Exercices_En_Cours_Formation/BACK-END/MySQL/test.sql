create database exempleCyber;
use exempleCyber;
CREATE TABLE utilisateurs(
id_utilisateur INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_utilisateur varchar(50) NOT NULL,
prenom_utilisateur VARCHAR(50) NOT NULL 
)Engine=InnoDB;

CREATE TABLE roles(
id_roles INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_roles VARCHAR(50) NOT NULL
)Engine=InnoDB;
-- modifier la table utilisateur
ALTER TABLE utilisateurs
ADD COLUMN id_roles INT;

-- ajouter la foreign key
ALTER TABLE utilisateurs
ADD CONSTRAINT fk_posseder_roles
FOREIGN KEY (id_roles)
REFERENCES roles(id_roles);
-- modifier la column nom_roles
ALTER TABLE roles
MODIFY COLUMN nom_roles VARCHAR(100);





-- ajouter 2 tables et une table d'assosciation
CREATE TABLE article(
id_article INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
titre_article VARCHAR(50) NOT NULL
)Engine=InnoDB;

CREATE TABLE categorie(
id_categorie INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_categorie VARCHAR(50) NOT NULL
)Engine=InnoDB;

CREATE TABLE ajouter(
id_article INT,
id_categorie INT,
PRIMARY KEY(id_categorie, id_article)
)Engine=InnoDB;

ALTER TABLE ajouter
ADD CONSTRAINT fk_ajouter_article
FOREIGN KEY (id_article)
REFERENCES article(id_article);

ALTER TABLE ajouter
ADD CONSTRAINT fk_ajouter_categorie
FOREIGN KEY (id_categorie)
REFERENCES categorie (id_categorie);
