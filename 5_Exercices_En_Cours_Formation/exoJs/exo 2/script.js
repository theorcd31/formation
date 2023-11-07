localStorage.getItem("tasks") == null ? localStorage.setItem("tasks", []) : false
let liste = document.querySelector('#tasks')
// //EXERCICE 14 DOM
// const titre = document.querySelector ("h1");
// const texte = document.querySelector ("div");
// const par = document.querySelector ("p");

// titre.style.color = "purple";
// titre.style.fontSize = "14px";
// texte.style.fontFamily = "Arial";
// par.style.fontFamily = "Arial";
// par.style.color = "green";

// titre.textContent = "Bonjour";
// par.textContent = "Ceci est du texte random";

// //EXERCICE 15 DOM

// const user = {
//     'id' : 1,
//     'nom': 'Richard',
//     'prenom': 'Toto',
//     'age': "8",
//     'image' :'./logoUser.jpg'
//   }

// const section = document.querySelector("div");
// const logo = document.querySelector("img");
// const par1 = document.querySelector("p:nth-child(2)");
// const par2 = document.querySelector("p:nth-child(3)");
// const par3 = document.querySelector("p:nth-child(4)");
  
// section.setAttribute("id",user.id);

// par1.textContent = user.nom;
// par2.textContent = user.prenom;
// par3.textContent = user.age;

// logo.src = user.image;

// par1.style.color = "blue";
// par1.style.fontSize = "11px";
// par2.style.color = "blue";
// par2.style.fontSize = "11px";
// par3.style.color = "blue";
// par3.style.fontSize = "11px";

// logo.style.height = "100px";
// logo.style.width = "100px";

// //suite en correction discord javascript


// // EXERCICE 16 DOM
// function calculer() {
//   const nbChoco = document.querySelector("#quantite").value;
//   let showPrice = 0;
//   let nbChoco10 = 10;
//   let p1 = document.querySelector("#resultat");
//   if(isNaN(nbChoco)){
//     p1.textContent = `Tu vas pas me la faire petit chenapan mets un nombre`;
//   } else {
//     if (nbChoco < 10) {
//       showPrice = nbChoco * 1.4;
//     } else if (nbChoco > 10 && nbChoco <= 20) {
//       showPrice = (nbChoco - 10) * 1.3 + nbChoco10 * 1.4;
//     } else if (nbChoco > 20) {
//       showPrice = nbChoco10 * 1.4 + nbChoco10 * 1.3 + (nbChoco - 20) * 1.2;
//     }
    // p1.textContent = `Le prix est de ${showPrice.toFixed(2)} euros`;
//   }
//   if(nbChoco == ""){
//     p1.textContent = `Veuillez renseignez le champ`;
//   }
// }

// //EXERCICE 17 DOM
// function calculer(){
//   const prix = parseFloat(document.querySelector("#prixHt").value)
//   const nb = parseInt(document.querySelector("#quantite").value)
//   const result = document.querySelector("#resultat");
//   const nom = document.querySelector("#nomProduit").value;
//   let tab =[];
//   tab[0] = nom;
//   tab[1] = prix;
//   tab[2] = nb;
//   tab.push(prix*nb*1.20); 

//   if(tab[2] == 0){
//     "Donc la tu me demandes un prix pour 0 chocolatine ? Mais on va se battre la"
//   }
//   if(isNaN(nb)||isNaN(prix)){
//     result.textContent = "Hé oh faut mettre des nombres là"
//   } else {
//     if(tab[2] == 1){
//       result.textContent = `Le prix pour ${tab[2]} ${tab[0]} est de ${Math.round(tab[3],2)}`
//     } else {
//       result.textContent = `Le prix pour ${tab[2]} ${tab[0]}s est de ${Math.round(tab[3],2)}`
//     }
//   }
// }


// //EXERCICE 18 DOM
// function addTask(){
//   const newDiv = document.createElement("div")
//   newDiv.setAttribute('id', container);
//   //Récupération de l'input
//   const newTask = document.querySelector("#task").value;
//   //Container de toute les tâches
//   const liste = document.querySelector("#tasks");
//   //Création d'un élément paragraphe
//   const par = document.createElement('p');
//   //Assignation valeur au paragraphe
//   par.textContent = newTask;
//   //Ajout du paragraphe à la liste
//   liste.appendChild(par);
//   const suppr = document.createElement("button");
//   suppr.setAttribute('id', delete 'onclick', deleteTask(this));
//   const maj = document.createElement("button");
//   maj.setAttribute('id', delete 'onclick', updateTask(this));
// }



// function delAllTask(){
//   const liste = document.querySelector("#tasks");
//   while (liste.firstChild){
//     liste.removeChild(liste.firstChild)
//   }
// }

// function reload(){
//   location.reload();
// }

// //EXERCICE 19 DOM
// //récupération de la div (tasks)
//   const liste = document.querySelector('#tasks');
// //fonction pour ajouter une tâche
//   function addTask(){
// //récupération de l'input (task)
//       const valeur = document.querySelector('#task').value;
// //création du container (container)
//       const container = document.createElement('div');
// //ajout de l'attribut class : container (div container)
//       container.setAttribute('class', 'container');
// //création du paragraphe
//       const paragraphe = document.createElement('p');
//       paragraphe.textContent = valeur;
//       const btUpdate = document.createElement('button');
// //création du bouton update
//       btUpdate.textContent = "Update";
//       btUpdate.setAttribute('onclick','updateTask(this)');
//       btUpdate.setAttribute('id','update');
// //création du bouton delete
//       const btDelete = document.createElement('button');
//       btDelete.textContent = "Delete";
//       btDelete.setAttribute('onclick','deleteTask(this)');
// //ajouter les enfants à la div (container)
//       container.appendChild(paragraphe);
//       container.appendChild(btUpdate);
//       container.appendChild(btDelete);
// //ajouter la div container à liste
//       liste.appendChild(container);
//   }
// //fonction qui va supprimer tous les enfants de tasks
//   function delAllTask(){
//       while(liste.firstChild){
//           liste.removeChild(liste.firstChild);
//       }
//   }
// //fonction pour recharger la page
//   function reload(){
//       location.reload();
//   }
//   //fonction pour supprimer la tache (div container parente)
//   function deleteTask(e){
//       e.parentNode.remove();
//   }

//   let statut = true 
// //function pour mettre à jour le texte de la tache courante
// function updateTask(e){
//   if(statut == true){
//     //récupérer valeur du paragraphe
//     const par = e.parentNode.firstChild.textContent;
//     //créer input type texte
//     const text = document.createElement("input");
//     text.setAttribute("type", "text");
//     text.setAttribute("id", "text2");
//     //Assigner à input
//     text.value = par ;
//     //remplacer paragraphe par input
//     e.parentNode.replaceChild(text, e.parentNode.firstChild);
//     //Statut passe à false
//     statut = false
//   } else {
//     //récupérer la valeur de l'input
//     const valeurInpt = e.parentNode.firstChild.value;
//     const par = document.createElement('p')
//     par.textContent = valeurInpt ;
//     e.parentNode.replaceChild(par, e.parentNode.firstChild)

//   statut = true
//   }
// }

// //EXERCICE 20 DOM
// }
// function addTask(){
    
    
//         //le code ci-dessous  : récupére la clé tasks dans le localstorage 
//     //et le met à jour avec la valeur saisie dans l'input du formulaire
//     //récupération de l'input ('#task)
//     let valeur = document.querySelector('#task').value;
//     //récupérer dans une variable la valeur clé ('tasks')
//     let tasks = localStorage.getItem('tasks');
//     //test si la clé tasks dans localstorage est vide
//     if(tasks==""){
//     tasks+= valeur;
//     }
//     //test sinon elle n'est pas vide
//     else{
//         //transforme en tableau
//         tasks = tasks.split(",");
//         //ajoute la valeur de l'input au tableau
//         tasks.push(valeur);
//     }
//     //mise à jour de la clé
//     localStorage.setItem('tasks',tasks);
    
//     //création du container (container)
//           const container = document.createElement('div');
//     //ajout de l'attribut class : container (div container)
//           container.setAttribute('class', 'container');
//     //création du paragraphe
//           const paragraphe = document.createElement('p');
//           paragraphe.textContent = valeur;
//           const btUpdate = document.createElement('button');
//     //création du bouton update
//           btUpdate.textContent = "Update";
//           btUpdate.setAttribute('onclick','updateTask(this)');
//           btUpdate.setAttribute('id','update');
//     //création du bouton delete
//           const btDelete = document.createElement('button');
//           btDelete.textContent = "Delete";
//           btDelete.setAttribute('onclick','deleteTask(this)');
//     //ajouter les enfants à la div (container)
//           container.appendChild(paragraphe);
//           container.appendChild(btUpdate);
//           container.appendChild(btDelete);
//     //ajouter la div container à liste
//           liste.appendChild(container);
//       }


// function showAllTask(){
//     let cle = localStorage.getItem('tasks')
//     cle = cle.split(',')
//     for (let i=0 ; i < cle.length ; i++){
//         console.log(cle[i])
//         //création du container (container)
//         const container = document.createElement('div');
//         //ajout de l'attribut class : container (div container)
//               container.setAttribute('class', 'container');
//         //création du paragraphe
//               const paragraphe = document.createElement('p');
//               paragraphe.textContent = cle[i];
//               const btUpdate = document.createElement('button');
//         //création du bouton update
//               btUpdate.textContent = "Update";
//               btUpdate.setAttribute('onclick','updateTask(this)');
//               btUpdate.setAttribute('id','update');
//         //création du bouton delete
//               const btDelete = document.createElement('button');
//               btDelete.textContent = "Delete";
//               btDelete.setAttribute('onclick','deleteTask(this)');
//         //ajouter les enfants à la div (container)
//               container.appendChild(paragraphe);
//               container.appendChild(btUpdate);
//               container.appendChild(btDelete);
//         //ajouter la div container à liste
//               liste.appendChild(container);
//     }
// }


// //EXERCICE 21 DOM
// //récupération des éléments HTML
// const bt = document.querySelector('#bt')
// //ajout d'un événement click (bouton 1)
// bt.addEventListener('click', ()=>{
      
//       let inputs = document.querySelectorAll('input[type="text"]');
//       const nomProduit = document.querySelector('#nom');
//       const prix = document.querySelector('#prixHt');
//       const nombre = document.querySelector('#quantite');
//       const par = document.querySelector('#resultat');
//       let verif = 0;

//       for (let i=0 ; i<inputs.length ; i++){
//             if(inputs[i].value ==""){
//                  inputs[i].style.backgroundColor = "rgba(255,0,0,0.8)";
//             } else {
//                   inputs[i].style.backgroundColor = "rgba(0,255,0,0.8)";
//                   verif++;
//             }
//             if(verif == 3){
//                 let prixTTC = ((prix.value*nombre.value)*1.20);
//                 par.textContent = `Le prix est égal à ${prixTTC.toFixed(2)} €`;
//             }
//       }
// })

//EXERCICE 22 DOM
let mail=document.querySelector('#email')
const paragraphe = document.querySelector('#error')

let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

mail.addEventListener('keyup', ()=>{
      if(mail.value.match(regexEmail)){
            mail.style.backgroundColor = "green"
      } else {
            mail.style.backgroundColor = "red"
      }
})

const mdp = document.querySelector('#password')

let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;

password.addEventListener('blur', ()=>{
      if(password.value.match(regexPassword)){
            password.style.backgroundColor = "green"
      } else {
            password.style.backgroundColor = "red"
      }
      if(mail.style.backgroundColor == 'green' && regexPassword.test(password.value)){
            paragraphe.textContent = 'Valide'
      } else {
            paragraphe.textContent = 'Invalide'
      }
})


