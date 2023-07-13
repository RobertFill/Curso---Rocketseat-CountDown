const form = document.getElementById('form');
const inputs = document.querySelectorAll('.required');
const tell = document.getElementById('inputTell');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegex = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    nameValidadetion();
    emailValidadetion();
    foneValidadetion();
    passValidadetion();
    passRepeatValidadetion();


})

function setErrorName(index) {
    inputs[index].style.border = "2px solid red"
    spans[index].style.display = "block";
}
function removeError(index) {
    inputs[index].style.border = ''
    spans[index].style.display = ''
}


function nameValidadetion() {
    if (inputs[0].value.length < 3) {
        setErrorName(0);
    } else {
        removeError(0);
    }
}
function emailValidadetion() {
    if (!emailRegex.test(inputs[1].value)) {
        setErrorName(1);
    } else {
        removeError(1);
    }
}
function foneValidadetion() {
    if (!phoneRegex.test(inputs[2].value)) {
        setErrorName(2);
    } else {
        removeError(2);
    }
}
function passValidadetion() {
    if (!passwordRegex.test(inputs[3].value)) {
        setErrorName(3);
        

    } else {
        removeError(3);
        passRepeatValidadetion();
    }
    
}
function passRepeatValidadetion() {
    if (inputs[3].value == inputs[4].value) {

        removeError(4);

    } else {

        setErrorName(4);
    }
}





