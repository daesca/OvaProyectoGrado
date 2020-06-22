let questions = [

    {
        text: 'Las redes de reconocimiento se sitúan en la parte superior del cerebro',
        correctAnswer: 1
    },
    {
        text: 'Las redes estratégicas representan el "cómo" del aprendizaje',
        correctAnswer: 1
    },
    {
        text: 'Las redes afectivas representan el "por qué" del aprendizaje',
        correctAnswer: 1
    },
    {
        text: 'Las redes de reconocimiento representan el "qué" del aprendizaje',
        correctAnswer: 1
    },
    {
        text: 'El enunciado "Responde a las diferentes formas en que los estudiantes perciben y comprenden la información" corresponde a lo establecido en el Principio 3',
        correctAnswer: 0
    },
    {
        text: '"Proporcionar múltiples formas de expresión del aprendizaje" es un enunciado del Principio 1',
        correctAnswer: 0
    },
    {
        text: 'El enunciado: "Guarda relación con la forma como la persona se motiva y se compromete con el proceso de aprendizaje" hace alución al Principio 2',
        correctAnswer: 0
    },
    {
        text: 'No hace parte de las funciones de las redes estratégicas las siguientes tareas: planificar, ejecutar y monitorizar las tareas motrices y mentales',
        correctAnswer: 0
    }

];
var columna_a = document.getElementById("columna_a").innerHTML;
var columna_b = document.getElementById("columna_b").innerHTML;

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
    if (element.classList.contains('active')) {
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

function activeSubmenu(element) {
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

function addQuestions(questions) {

    // console.log(questions);

    let mutableQuestions = questions;

    for (let i = 0; i < 4; i++) {

        let randomIndex = Math.floor(Math.random() * (mutableQuestions.length - 1)) + 0;
        // console.log(randomIndex);

        let questionIndex = i + 1;

        let questionContainer = document.querySelector("#falsoVerdadero > #preguntas > #pregunta-" + questionIndex);
        // console.log(questionContainer.childNodes);

        questionContainer.setAttribute('data-answer', mutableQuestions[randomIndex].correctAnswer);

        questionContainer.childNodes[1].innerHTML = mutableQuestions[randomIndex].text;

        mutableQuestions.splice(randomIndex, 1);

    }

}

function evaluatedQuestions() {

    resultsContainer = document.querySelector("#resultado");

    for (let i = 0; i < 4; i++) {

        let questionIndex = i + 1;

        let questionContainer = document.querySelector("#falsoVerdadero > #preguntas > #pregunta-" + questionIndex);

        let responseContainer = document.querySelector("#resultado > #resultado-" + questionIndex);

        // console.log(responseContainer);

        let option = document.querySelector("#opciones-" + questionIndex).value;

        if (option == questionContainer.getAttribute('data-answer')) {

            responseContainer.classList.add('success');
            responseContainer.childNodes[1].innerHTML = "¡Correcto!";

        } else {

            responseContainer.classList.add('warning');
            // console.log(responseContainer.childNodes);
            responseContainer.childNodes[1].innerHTML = "Incorrecto";

            let textAnswer = "Verdadero";

            if (questionContainer.getAttribute('data-answer') != 1) {

                textAnswer = "Falso";

            }

            responseContainer.childNodes[3].innerHTML = "La respuesta correcta era: " + textAnswer;

        }


    }

    resultsContainer.classList.remove('none');

}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.target.style.opacity = ".5";

    ev.dataTransfer.setData("text", ev.target.id);
}

function dropFake() {
    return false;
}

function drop(ev) {
    var data = ev.dataTransfer.getData("text");
    var col_b = document.getElementById(data);
    console.log(col_b.getAttribute('data-col'));
    console.log(ev.target.getAttribute('data-col'));
    if (col_b.getAttribute('data-col') === ev.target.getAttribute('data-col')) {
        ev.target.style.backgroundColor = "#e4fff0";
    } else {
        ev.target.style.backgroundColor = "#ffc4c4";
    }
    ev.target.appendChild(col_b);
    ev.target.setAttribute('ondrop', dropFake);
}

function dragend(ev) {
    ev.target.style.opacity = "1";
    ev.target.childNodes[1].style.opacity = "1";
}
function resetDragAndDrop(ev) {
    ev.preventDefault();
    document.getElementById("columna_a").innerHTML = columna_a;
    document.getElementById("columna_b").innerHTML = columna_b;
}