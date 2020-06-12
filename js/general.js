function showIndice(element) {

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
    console.log(element.parentNode);
    let idContentElement = element.getAttribute('data-target');
    document.querySelector(".indice").classList.add('hidde');
    document.querySelector(idContentElement).classList.add('show');


}

function back(element) {

    let returnToIndice = element.getAttribute('data-target');
    element.parentNode.classList.remove('show');

    document.querySelector(returnToIndice + " > div.indice ").classList.remove('hidde');

}