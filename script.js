'use strict';

const modal = document.querySelector('.modal');
const btnclosedmodal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btnshowmodal = document.querySelectorAll('.show-modal');

console.log(btnshowmodal);
const openmodal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const close = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for (let i = 0 ; i < btnshowmodal.length ; i++)  {
    btnshowmodal[i].addEventListener('click' ,  openmodal)
}
btnclosedmodal.addEventListener('click' , close);

overlay.addEventListener('click' , close);

document.addEventListener('keydown' , function(e){
    console.log(e.key) 

    if (e.key === 'Escape') {
        if(! modal.classList.contains('hidden')) {
        close();
        }
    }
});



