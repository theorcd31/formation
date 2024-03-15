create database testsecurity;   
use testsecurity;
create user 'toto'@'%' IDENTIFIED BY '1234';

-- affecter tous les droits sur la base test
grant all privileges on testsecurity. * to 'toto'@'%';
flush privileges;

-- retirer tous les droits de la base testsecurity
revoke all privileges on testsecurity. * from 'toto'@'%';
flush privileges;

-- Exercice 1 SQL DROITS

create table utilisateur(
id_utilisateur INT primary key auto_increment NOT NULL,
nom_utilisateur VARCHAR(100) NOT NULL,
prenom_utilisateur VARCHAR(100) NOT NULL
)Engine=InnoDB;

create table article (
id_article INT primary key auto_increment NOT NULL,
titre_article VARCHAR(100) NOT NULL,
date_article VARCHAR (100) NOT NULL,
contenu_article TEXT NOT NULL
)Engine=InnoDB;

create table commentaire (
id_commentaire INT primary key auto_increment NOT NULL,
texte_commentaire TEXT NOT NULL,
date_commentaire VARCHAR (100) NOT NULL
)Engine=InnoDB;

-- modification des tables pour ajouter la colonne id_utilisateur qui va recevoir la foreign key
alter table article
add column id_utilisateur INT;
alter table commentaire
add column id_utilisateur INT;

alter table article
add constraint fk_rediger_utilisateur
foreign key (id_utilisateur)
references utilisateur(id_utilisateur);

alter table commentaire
add constraint fk_ecrire_utilisateur
foreign key (id_utilisateur)
references utilisateur(id_utilisateur);

create table ajouter(
id_article INT,
id_commentaire INT,
PRIMARY KEY(id_article, id_commentaire)
)Engine=InnoDB;

alter table ajouter 
add constraint fk_ajouter_article
foreign key (id_article)
references article(id_article);

alter table ajouter 
add constraint fk_ajouter_commentaire
foreign key (id_commentaire)
references commentaire(id_commentaire);

-- Création du compte visiteur 
create user 'visiteur'@'%' IDENTIFIED BY '1234';
grant select, insert on testsecurity.utilisateur to 'visiteur'@'%';
flush privileges;
grant select on testsecurity. * to 'visiteur'@'%';

-- Création du compte utilisateur 
create user 'utilisateur'@'%' IDENTIFIED BY '1234';
grant select, insert on testsecurity. * to 'utilisateur'@'%';
flush privileges;
grant update on testsecurity.utilisateur to 'utilisateur'@'%';
grant update on testsecurity.commentaire to 'utilisateur'@'%';
grant update on testsecurity.article to 'utilisateur'@'%';

-- Création du compte administrateur
create user 'administrateur'@'%' IDENTIFIED BY '1234';
grant select, insert, delete on testsecurity. * to 'administrateur'@'%';
grant update on testsecurity.utilisateur to 'administrateur'@'%';
grant update on testsecurity.commentaire to 'administrateur'@'%';
grant update on testsecurity.article to 'administrateur'@'%';