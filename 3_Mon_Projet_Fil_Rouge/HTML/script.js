const fav = document.querySelector('i');

function addFav(){
    fav.classList.remove('fa-regular');
    fav.classList.add('fa-solid');
}
function delFav(){
    fav.classList.remove('fa-solid');
    fav.classList.add('fa-regular');
}

fav.addEventListener('click', ()=>{
    if(fav.classList.contains('fa-solid') == true){
        delFav();
    } else{
        addFav();
    }
});


