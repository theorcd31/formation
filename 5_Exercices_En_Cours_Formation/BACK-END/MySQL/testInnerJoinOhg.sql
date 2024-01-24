-- test comment récupérer un titre d'une actualite mise en fav par un user
use overhaulgames;

SELECT titre_actualite FROM ajouter
INNER JOIN utilisateur 
ON ajouter.id_utilisateur = utilisateur.id_utilisateur
INNER JOIN actualite
ON ajouter.id_actualite = actualite.id_actualite 