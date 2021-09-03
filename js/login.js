let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");

form.addEventListener('submit' ,(e) => {
    e.preventDefault();

    checkInputs();
})

form.addEventListener('keyup' ,(e) => {
    e.preventDefault();

    checkInputs();
} )

function checkInputs() {
    let em = email.value.trim() ;
    let pwd = password.value.trim();

    if(em === "") {
        setErrorFor(email , 'Email cannot be blank');
    }
    else if(!isEmail(em)) {
        setErrorFor(email , 'Email is not valid');
    }
    else {
        setSuccessFor(email);
    }

    if(pwd === "") {
        setErrorFor(password , 'Password cannot be blank');
    }
    else {
        setSuccessFor(password);
    }
}

function setErrorFor(input , message) {
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-mp error';
}

function setSuccessFor(input) {
    let formControl = input.parentElement;
    formControl.className = 'form-mp success';
}

function isEmail(email) {
    return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/.test(email);
}