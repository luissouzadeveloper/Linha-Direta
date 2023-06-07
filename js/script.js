// Menu animado
let menu = document.querySelector('.navegacao');
let pixelsAmount = '50'
window.addEventListener('scroll', function () {
    if (this.window.scrollY > pixelsAmount) {
        menu.classList.add('menu-rolado')
    } else {
        menu.classList.remove('menu-rolado')
    }
})

// Menu mobile
function openMenu(){
    let menuMobile = document.querySelector('.menu-mobile');

    if (menuMobile.classList.contains('open-menu-mobile')) {
        menuMobile.classList.remove('open-menu-mobile');
    } else {
        menuMobile.classList.add('open-menu-mobile');
    }
}

// MODAIS
function openSino(){
    let modalSino = document.querySelector('.modal-sino');

    if (modalSino.classList.contains('open-sino')) {
        modalSino.classList.remove('open-sino');
    } else {
        modalSino.classList.add('open-sino');
    }
}

// Episódio 1
function modalEp1(){
    let ep1 = document.querySelector('#modal-ep1');

    if (ep1.classList.contains('open-modal')) {
        ep1.classList.remove('open-modal');
    } else {
        ep1.classList.add('open-modal'); 
    }
}
// Episódio 2
function modalEp2(){
    let ep2 = document.querySelector('#modal-ep2');

    if (ep2.classList.contains('open-modal')) {
        ep2.classList.remove('open-modal');
    } else {
        ep2.classList.add('open-modal'); 
    }
}
// Episódio 3
function modalEp3(){
    let ep3 = document.querySelector('#modal-ep3');

    if (ep3.classList.contains('open-modal')) {
        ep3.classList.remove('open-modal');
    } else {
        ep3.classList.add('open-modal'); 
    }
}
// Episódio 4
function modalEp4(){
    let ep4 = document.querySelector('#modal-ep4');

    if (ep4.classList.contains('open-modal')) {
        ep4.classList.remove('open-modal');
    } else {
        ep4.classList.add('open-modal'); 
    }
}
// Episódio 5
function modalEp5(){
    let ep5 = document.querySelector('#modal-ep5');

    if (ep5.classList.contains('open-modal')) {
        ep5.classList.remove('open-modal');
    } else {
        ep5.classList.add('open-modal'); 
    }
}
