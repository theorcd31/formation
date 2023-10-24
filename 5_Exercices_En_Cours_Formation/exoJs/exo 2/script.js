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

//EXERCICE 19 DOM
//récupération de la div (tasks)
  const liste = document.querySelector('#tasks');
//fonction pour ajouter une tâche
  function addTask(){
//récupération de l'input (task)
      const valeur = document.querySelector('#task').value;
//création du container (container)
      const container = document.createElement('div');
//ajout de l'attribut class : container (div container)
      container.setAttribute('class', 'container');
//création du paragraphe
      const paragraphe = document.createElement('p');
      paragraphe.textContent = valeur;
      const btUpdate = document.createElement('button');
//création du bouton update
      btUpdate.textContent = "Update";
      btUpdate.setAttribute('onclick','updateTask(this)');
      btUpdate.setAttribute('id','update');
//création du bouton delete
      const btDelete = document.createElement('button');
      btDelete.textContent = "Delete";
      btDelete.setAttribute('onclick','deleteTask(this)');
//ajouter les enfants à la div (container)
      container.appendChild(paragraphe);
      container.appendChild(btUpdate);
      container.appendChild(btDelete);
//ajouter la div container à liste
      liste.appendChild(container);
  }
//fonction qui va supprimer tous les enfants de tasks
  function delAllTask(){
      while(liste.firstChild){
          liste.removeChild(liste.firstChild);
      }
  }
//fonction pour recharger la page
  function reload(){
      location.reload();
  }
  //fonction pour supprimer la tache (div container parente)
  function deleteTask(e){
      e.parentNode.remove();
  }

  let statut = true 
//function pour mettre à jour le texte de la tache courante
function updateTask(e){
  if(statut == true){
    //récupérer valeur du paragraphe
    const par = e.parentNode.firstChild.textContent;
    //créer input type texte
    const text = document.createElement("input");
    text.setAttribute("type", "text");
    text.setAttribute("id", "text2");
    //Assigner à input
    text.value = par ;
    //remplacer paragraphe par input
    e.parentNode.replaceChild(text, e.parentNode.firstChild);
    //Statut passe à false
    statut = false
  } else {
    //récupérer la valeur de l'input
    const valeurInpt = e.parentNode.firstChild.value;
    const par = document.createElement('p')
    par.textContent = valeurInpt ;
    e.parentNode.replaceChild(par, e.parentNode.firstChild)

  statut = true
  }






  // //récupération de l'input (task)
  // const valeur = document.querySelector('#task').value;
  // //test si valeur est différent de vide
  // if(valeur != ""){
  //     //modifier depuis le parent -> 1 enfant
  //     e.parentNode.firstChild.textContent = valeur;
  //     //V2 modifier depuis le parent 1 élément de la nodelist (HTML Collection)
  //     //e.parentNode[0].textContent = valeur;
  //     //V3 modifier depuis l'élément frére ou soeur précédent
  //     //e.previousElementSibling.textContent = valeur;
  // }
  // //test si valeur est vide (redonne la même valeur)
  // else{
  //     e.parentNode.firstChild.textContent = e.parentNode.firstChild.textContent
  // }
}


