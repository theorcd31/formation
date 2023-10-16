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
//     console.log("positif")
// } else{
//     console.log("negatif")
// }

// //EXERCICE 3 
//  let nbr2 

//  if(nbr1+nbr2 > 0){
//     console.log("positif")
//  } else {
//     console.log("negatif")
//  }

// //EXERCICE 4
// let nbr1 = 10
// let nbr2 = -5

// if(nbr1 > 0 && nbr2 > 0){
//     console.log("Positif")
// } else if ((nbr1 > 0 && nbr2 < 0) || (nbr1 < 0 && nbr2 > 0)){
//     console.log("Négatif")
// } else if (nbr1 == 0 && nbr2 == 0){
//     console.log("égale à 0")
// } else {
//     console.log("Négatif")
// }

// //EXERCICE 5
// let age = prompt("Saisir le nombre 1")

// if(age = 6 && 7){
//     console.log("Poussin");
// } else if (age = 8 && 9){
//     console.log("Pupille");
// } else if ( age = 10 && 11){
//     console.log("Minime");
// } else if (age >= 12){
//     console.log("Cadet");
// } else {
//     console.log("Faut avoir au moins 6 ans désolé faut s'entraîner dans le jardin")
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

//EXERCICE 6

let mot1 = prompt("premier mot")
let mot2 = prompt("second mot")
let mot3 = prompt("troisième mot")

if(mot1 < mot2 && mot2 < mot3){
    console.log(mot1+mot2+mot3)
}