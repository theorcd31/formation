// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function tabLast(t) {
    let numéroLastCase = t.length-1;
    console.log(numéroLastCase);
}

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function tabLastReturn(t) { 
    let numéroLastCase = t.length-1;
    return numéroLastCase;
}
// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function tabMin(t){
    let min 
    for (let i=0 ; i < t.length ; i++){
        if(t[i]< min){
            min = t[i]
        }
    }
    return min
}

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function tabMax(t){
    let max = t[0];
    for (let i=0 ; i < t.length ; i++){
        if(t[i] > max){
            max = t[i]
        }
    }
    return max
}
// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function tabRepeat(t, a){
    let showRepeat = 0
    for (let i=0 ; i < t.length ; i++){
        if(t[i] == a){
            return showRepeat
        } 
    }
}

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
function tabTrueFalse(t, a){
    for (let i=0 ; i < t.length ; i++){
        if(t[i] = a){
            return true
        } else {
            return false
            }
    }
}


// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

//Créer un tableau qui contient [1,2,3,...,7777].
let myTab1=[];
for(let i=1 ; i<7778 ; i++){
    myTab1.push(i);
}
// Créer un tableau qui contient [10,20,30,...,77770].
let myTab10=[];
for(let i=10 ; i<77780 ; i = i + 10){
    myTab10.push(i);
}

//En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let myTab5=[];
for(let i=5 ; i<38890 ; i = i + 5){
    myTab5.push(i);
}


// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]
function tabSuppr(t){
    while(t[t.length - 1]< 50){
        t.pop();
    }
    return t;
}
console.log(tabSuppr([1,45,88,54,23,-100,12]))