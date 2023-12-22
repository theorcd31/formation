const burgerBtn = document.querySelector('.openBurger');
const menuBurger = document.querySelector('nav');
const croixBtn = document.querySelector('.closeBurger');

burgerBtn.addEventListener('click', ()=>{
    menuBurger.style.transform = 'translateX(0vw)';
    
});

croixBtn.addEventListener('click', ()=>{
    menuBurger.style.transform = 'translateX(100vw)';
});



const fav = document.querySelector('#favoris');

function addFav(){
    fav.classList.remove('fa-regular');
    fav.classList.add('fa-solid');
};
function delFav(){
    fav.classList.remove('fa-solid');
    fav.classList.add('fa-regular');
};

fav.addEventListener('click', ()=>{
    if(fav.classList.contains('fa-solid') == true){
        delFav();
    } else{
        addFav();
    }
});


// const test = document.querySelector('.renseignerInfo');

// test.addEventListener('click', ()=>{
//     console.log('dems');
// })