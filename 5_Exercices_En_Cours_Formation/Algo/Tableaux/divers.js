// Exercice divers_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.
// Exemple : positionBiggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1
function positionBiggest(t){
        let big
        for (let i=0 ; i < t.length ; i++){
            if(t[i]< big){
                big = t[i]
            }
        }
        return t[i]
}

// Exercice divers_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.
function additionTab(t)

// Exercice divers_3 : écrire une fonction qui retourne la somme des valeurs positives d'un tableau.

// Exercice divers_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'un tableau.