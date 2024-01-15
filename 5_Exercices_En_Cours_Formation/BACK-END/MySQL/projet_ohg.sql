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