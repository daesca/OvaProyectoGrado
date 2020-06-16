function showIndice(element) {

    // element.preventDefault();

    let themes = document.querySelectorAll(".right-side > div");
    // console.log(themes);
    for (let x = 0; x < themes.length; x++) {

        themes[x].classList.remove('show');

    }
    document.querySelector(element.getAttribute('data-target')).classList.add('show');

}

function showContent(element) {

    // console.log(element.getAttribute('data-target'));
    // let parent = element.parentNode;
    // console.log(element.parentNode);
    let idContentElement = element.getAttribute('data-target');
    document.querySelector(".indice").classList.add('hidde');
    document.querySelector(idContentElement).classList.add('show');

}



function back(element) {

    let returnToIndice = element.getAttribute('data-target');
    element.parentNode.classList.remove('show');

    document.querySelector(returnToIndice + " > div.indice ").classList.remove('hidde');

}

function showPopover(element) {
    if(element.classList.contains('active')) {
        x.classList.add('none');
        element.classList.remove('active');
    } else {
        removeActive();
        let popovers = document.querySelectorAll(".popover");
        for (let x = 0; x < popovers.length; x++) {

            // console.log(popovers[x]);
            popovers[x].classList.add('none');

        }
        element.classList.add('active');
        x = element.nextElementSibling;
        x.classList.remove('none');
    }

}

function showPauta(element) {

    let navPautas = document.querySelectorAll(".nav-pauta");
    for (let x = 0; x < navPautas.length; x++) {

        if (navPautas[x] !== element) {

            navPautas[x].parentNode.classList.add('none');

        }

    }
    element.parentNode.classList.add('height-auto');
    x = element.nextElementSibling;
    x.classList.remove('none');


}

function backPrincipios() {

    let navPautas = document.querySelectorAll(".nav-pauta");

    for (let x = 0; x < navPautas.length; x++) {

        navPautas[x].parentNode.classList.remove('height-auto');
        navPautas[x].nextElementSibling.classList.add('none');
        navPautas[x].parentNode.classList.remove('none');

    }

}
function activeSubmenu(element)
{
    closeSubmenu();
    element.nextElementSibling.classList.remove('none');

}

function closeSubmenu() {
    var submenu = document.getElementsByClassName('submenu');
    for (var i = 0; i < submenu.length; i++) {
        submenu[i].classList.add('none');
    }
}

function removeActive() {
    let popovers = document.querySelectorAll(".open-popover");
    for (let x = 0; x < popovers.length; x++) {

        // console.log(popovers[x]);
        popovers[x].classList.remove('active');

    }
}