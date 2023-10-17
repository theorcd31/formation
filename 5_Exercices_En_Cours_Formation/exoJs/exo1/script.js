// EXERCICE 1

// let nb1=2;
// let nb2=3;
// let nb3 = nb1

// nb1 = nb2;
// nb2 = nb3;

// let toulousainOuPas

// function SudOuest(){
// if(toulousainOuPas == 1){
//     console.log("chocolatine");
// } else {
//     console.log("painAuChocolat");
// }
// }
// toulousainOuPas = 1%2;
// SudOuest();

// //EXERCICE 2
// let nbr1

// if (nbr1 > 0){
//     console.log("positif");
// } else{
//     console.log("negatif");
// }

// //EXERCICE 3 
//  let nbr2 

//  if(nbr1+nbr2 > 0){
//     console.log("positif");
//  } else {
//     console.log("negatif");
//  }

// //EXERCICE 4
// let nbr1 = 10
// let nbr2 = -5

// if(nbr1 > 0 && nbr2 > 0){
//     console.log("Positif");
// } else if ((nbr1 > 0 && nbr2 < 0) || (nbr1 < 0 && nbr2 > 0)){
//     console.log("Négatif");
// } else if (nbr1 == 0 && nbr2 == 0){
//     console.log("égale à 0");
// } else {
//     console.log("Négatif");
// }

// //EXERCICE 5
// let age = prompt("Saisir le nombre 1");

// if(age = 6 && 7){
//     console.log("Poussin");
// } else if (age = 8 && 9){
//     console.log("Pupille");
// } else if ( age = 10 && 11){
//     console.log("Minime");
// } else if (age >= 12){
//     console.log("Cadet");
// } else {
//     console.log("Faut avoir au moins 6 ans désolé faut s'entraîner dans le jardin");
// }

// //EXERCICE 5 bis
// age = prompt("Saisir le nombre 1");

// switch (true){
//     case age < 6 : 
//     console.log("Faut avoir au moins 6 ans désolé faut s'entraîner dans le jardin");
//     break;
//     case age == 6 ||age == 7 :
//     console.log("Poussin");
//     break;
//     case age == 8 || age == 9 :
//     console.log("Pupille");
//     break;
//     case age == 10 || age == 11 :
//     console.log("Minime");
//     break;
//     case age >= 12 :
//     console.log("Cadet");
//     break;
    
// }

// //EXERCICE 6

// let mot1 = prompt("premier mot");
// let mot2 = prompt("second mot");
// let mot3 = prompt("troisième mot");

// if(mot1 < mot2 && mot2 < mot3){
//     console.log("c alphabétique");
// } 

// //EXERCICE 7
// let tab = []; 

// tab[1] = prompt("Saisissez première valeur");
// tab[2] = prompt("Saisissez deuxième valeur");
// tab[3] = prompt("Saisissez troisième valeur");

// if(tab[1]<tab[2] && tab[2]< tab[3]){
//     console.log("los valores se ordenan en orden ascendente");
// } else {
//     console.log("les valeurs ne sont pas triées dans un ordre croissant");
// }


// //EXERCICE 8

// let tab = [];

//  tab[1] = {'Produit': prompt("Nom du produit")};
//  tab[2] = {'PrixHT':parseFloat(prompt("Prix HT"))};
//  tab[3] = {'Quantité':parseInt(prompt("Quantité"))};

//  tab.push (Math.round((tab[2].PrixHT*1.20)*tab[3].Quantité,2))

//  console.log(tab);

//Exercice 9
let users = [];
for (let i=0 ; i<5 ; i++){
    let user = {
        'nom' : prompt("Saisir le nom de l'utilisateur"),
        'prenom': prompt("Saisir le prénom de l'utilisateur"),
        'age': parseInt(prompt("Saisir l\'age de l'utilisateur")),
        'numDeTel': parseInt(prompt("Saisir numero de telephone de l'utilisateur"))
    };
    users.push(user);
}

let minAge = users[0].age
let indice = 0

for (let i=0 ; i<5 ; i++){
    if(minAge >= users[i].age){
        minAge = users[i].age
        indice = i
    }
}
console.log("l'utilisateur le plus jeune est", users[indice].prenom, users[indice].nom)
