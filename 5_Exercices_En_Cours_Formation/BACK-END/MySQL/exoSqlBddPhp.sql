create database exoPHP;
use exoPHP;

create table utilisateur(
id int primary key auto_increment not null,
nom_utilisateur VARCHAR(50) NOT NULL,
prenom_utilisateur VARCHAR(50) NOT NULL,
email_utilisateur VARCHAR(50) NOT NULL,
password_utilisateur VARCHAR(100) NOT NULL
);

DROP TABLE utilisateur;
