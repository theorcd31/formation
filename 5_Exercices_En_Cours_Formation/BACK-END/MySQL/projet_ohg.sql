create database overhaulgames;
use overhaulgames;
create table utilisateur (
id_utilisateur int primary key auto_increment not null,
nom_utilisateur varchar(50) not null,
prenom_utilisateur varchar(50) not null,
pseudo_utilisateur varchar(50),
email_utilisateur varchar(50) unique not null,
password_utilisateur varchar(100) not null
)Engine=InnoDB;

create table commentaires (
id_commentaire int primary key auto_increment not null,
contenu_commentaire text not null,
date_commentaire datetime not null,
id_test INT,
id_utilisateur INT
)Engine=InnoDB;

create table tests (
id_test int primary key auto_increment not null,
titre_test varchar(50) not null,
contenu_test text not null,
date_test datetime not null,
id_jeu INT
)Engine=InnoDB;

create table jeux (
id_jeu int primary key auto_increment not null,
titre_jeu varchar(50) not null,
sortie_jeu varchar(50) not null,
descriptif_jeu char(50) not null
)Engine=InnoDB;

create table genre (
id_genre int primary key auto_increment not null,
nom_genre varchar(50) not null
)Engine=InnoDB;

create table plateforme (
id_plateforme int primary key auto_increment not null,
nom_plateforme varchar(50) not null
)Engine=InnoDB;

create table forums (
id_forum int primary key auto_increment not null,
titre_forum varchar(50) not null,
sujet_forum varchar(50) not null,
date_forum datetime not null
)Engine=InnoDB;

create table categorie (
id_categorie int primary key auto_increment not null,
nom_categorie varchar(50) not null
)Engine=InnoDB;

create table actualite (
id_actualite int primary key auto_increment not null,
titre_actualite varchar(50) not null,
contenu_actualite text not null,
date_actualite datetime not null
)Engine=InnoDB;

-- ajout table assosciations

create table consulter (
id_utilisateur INT,
id_forum INT,
PRIMARY KEY(id_utilisateur, id_forum)
)Engine=InnoDB;

create table ajouter (
id_utilisateur INT,
id_actualite INT,
PRIMARY KEY(id_utilisateur, id_actualite)
)Engine=InnoDB;

create table regarder (
id_utilisateur INT,
id_test INT,
PRIMARY KEY(id_utilisateur, id_test)
)Engine=InnoDB;

create table rattacher (
id_forum INT,
id_categorie INT,
PRIMARY KEY(id_forum, id_categorie)
)Engine=InnoDB;

create table posseder (
id_actualite INT,
id_categorie INT,
PRIMARY KEY(id_actualite, id_categorie)
)Engine=InnoDB;

create table concerner (
id_jeu INT,
id_genre INT,
PRIMARY KEY(id_jeu, id_genre)
)Engine=InnoDB;

create table appartenir (
id_jeu INT,
id_plateforme INT,
PRIMARY KEY(id_jeu, id_plateforme)
)Engine=InnoDB;

-- ajout des contraintes

ALTER TABLE commentaires
ADD CONSTRAINT fk_ecrire_utilisateur
FOREIGN KEY (id_utilisateur)
REFERENCES utilisateur(id_utilisateur);

ALTER TABLE commentaires
ADD CONSTRAINT fk_assoscier_tests
FOREIGN KEY (id_test)
REFERENCES tests(id_test);

ALTER TABLE tests
ADD CONSTRAINT fk_attribuer_jeux
FOREIGN KEY (id_jeu)
REFERENCES jeux(id_jeu);

ALTER TABLE consulter
ADD CONSTRAINT fk_consulter_utilisateur
FOREIGN KEY (id_utilisateur)
REFERENCES utilisateur(id_utilisateur);

ALTER TABLE consulter
ADD CONSTRAINT fk_consulter_forums
FOREIGN KEY (id_forum)
REFERENCES forums(id_forum);

ALTER TABLE ajouter
ADD CONSTRAINT fk_ajouter_utilisateur
FOREIGN KEY (id_utilisateur)
REFERENCES utilisateur(id_utilisateur);

ALTER TABLE ajouter
ADD CONSTRAINT fk_ajouter_actualite
FOREIGN KEY (id_actualite)
REFERENCES actualite(id_actualite);

ALTER TABLE regarder
ADD CONSTRAINT fk_regarder_utilisateur
FOREIGN KEY (id_utilisateur)
REFERENCES utilisateur(id_utilisateur);

ALTER TABLE regarder
ADD CONSTRAINT fk_regarder_tests
FOREIGN KEY (id_test)
REFERENCES tests(id_test);

ALTER TABLE rattacher
ADD CONSTRAINT fk_rattacher_forums
FOREIGN KEY (id_forum)
REFERENCES forums(id_forum);

ALTER TABLE rattacher
ADD CONSTRAINT fk_rattacher_categorie
FOREIGN KEY (id_categorie)
REFERENCES categorie(id_categorie);

ALTER TABLE posseder
ADD CONSTRAINT fk_posseder_actualite
FOREIGN KEY (id_actualite)
REFERENCES actualite(id_actualite);

ALTER TABLE posseder
ADD CONSTRAINT fk_posseder_categorie
FOREIGN KEY (id_categorie)
REFERENCES categorie(id_categorie);

ALTER TABLE concerner
ADD CONSTRAINT fk_concerner_jeux
FOREIGN KEY (id_jeu)
REFERENCES jeux(id_jeu);

ALTER TABLE concerner
ADD CONSTRAINT fk_concerner_genre
FOREIGN KEY (id_genre)
REFERENCES genre(id_genre);

ALTER TABLE appartenir
ADD CONSTRAINT fk_appartenir_jeux
FOREIGN KEY (id_jeu)
REFERENCES jeux(id_jeu);

ALTER TABLE appartenir
ADD CONSTRAINT fk_appartenir_plateforme
FOREIGN KEY (id_plateforme)
REFERENCES plateforme(id_plateforme);