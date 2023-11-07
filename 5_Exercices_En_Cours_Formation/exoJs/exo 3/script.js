const par1 = document.querySelector('#nom');
const par2 = document.querySelector('#temps');
const par3 = document.querySelector('#temperature');
const erreur = document.querySelector('#error')


bt.addEventListener("click", () => {
  const valeurInput = document.querySelector("#ville").value;
  console.log(valeurInput);
  //url de l'api
  const ville = `https://api.openweathermap.org/data/2.5/weather?q=${valeurInput}&appid=6f88826d767f323ad19cd282444924e9`;
  //fonction récupérer la météo
  const meteo = fetch(ville).then(async (response) => {
    //récupération du json
    const json = await response.json();
    if(response.status==404){
        erreur.textContent = json.message
    } if (response.status == 200){
    //affichage du json dans la console
    console.log(json);
    par1.textContent = json.name;
    par2.textContent = json.weather[0].main;
    par3.textContent = (json.main.temp - 273.15).toFixed(2);
    }
  });
});


