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
date_commentaire datetime not null
)Engine=InnoDB;

create table tests (
id_test int primary key auto_increment not null,
titre_test varchar(50) not null,
contenu_test text not null,
date_test datetime not null
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