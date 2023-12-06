create database exo1Blog;
use exo1blog;

create table utilisateur(
id_utilisateur INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_utilisateur VARCHAR(50),
prenom_utilisateur VARCHAR(50),
email_utilisateur VARCHAR(50) UNIQUE NOT NULL,
password_utilisateur VARCHAR(100) NOT NULL,
active_utilisateur TINYINT(1) DEFAULT 1,
id_role INT
)Engine=InnoDB;

CREATE TABLE roles(
id_role INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_role VARCHAR(50)
)Engine=InnoDB;

create table article(
id_article INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
titre_article VARCHAR(50),
contenu_article VARCHAR(255),
date_creation_article date NOT NULL,
active_article TINYINT(1) DEFAULT 1,
id_utilisateur INT
)Engine=InnoDB;

create table commentaire(
id_commentaire INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
texte_commentaire VARCHAR(255),
date_creation_commentaire datetime NOT NULL,
active_commentaire TINYINT(1) DEFAULT 1,
id_utilisateur INT,
id_article INT
)Engine=InnoDB;

create table categorie(
id_categorie INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_categorie VARCHAR(50)
)Engine=InnoDB;

create table completer(
id_article INT,
id_categorie INT,
PRIMARY KEY(id_categorie, id_article)
)Engine=InnoDB;

-- association table completer aux tables tables article et categorie

ALTER TABLE completer
ADD CONSTRAINT fk_completer_article
FOREIGN KEY (id_article)
REFERENCES article(id_article);

ALTER TABLE completer
ADD CONSTRAINT fk_completer_categorie
FOREIGN KEY (id_categorie)
REFERENCES categorie(id_categorie);

alter table article
add constraint fk_article_utilisateur
foreign key (id_utilisateur)
references utilisateur(id_utilisateur);

alter table utilisateur
add constraint fk_utilisateur_roles
foreign key (id_role)
references roles(id_role);

-- modification des contraintes 

alter table article 
drop constraint fk_article_utilisateur;

alter table article
add constraint fk_rediger_utilisateur
foreign key (id_utilisateur)
references utilisateur(id_utilisateur);

alter table utilisateur 
drop constraint fk_utilisateur_roles;

alter table utilisateur 
add constraint fk_posseder_roles
foreign key (id_role)
references roles(id_role);

-- reprise des autres liens

alter table commentaire 
add constraint fk_ecrire_utilisateur
foreign key (id_utilisateur)
references utilisateur(id_utilisateur);

alter table commentaire 
add constraint fk_ajouter_article
foreign key (id_article)
references article(id_article);
