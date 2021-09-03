let form = document.getElementById("form");
let username = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let repassword = document.getElementById("repassword");

form.addEventListener('submit' , (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    let em = email.value.trim();
    let user = username.value.trim();
    let num = phone.value.trim();
    let pass1 = password.value.trim();
    let pass2 = repassword.value.trim();


    if(user === "") {
        setErrorFor(username , 'Name cannot be blank');
    }
    else {
        setSuccessFor(username);
    }

    if(em ==="") {
        setErrorFor(email , 'Email cannot be blank');
    }
    else if(!isEmail(em)){
        setErrorFor(email , 'Email is not Valid');
    }
    else {
        setSuccessFor(email);
    }

    if(num === '') {
        setErrorFor(phone , 'Phone number cannot be blank');
    }
    else if(!isPhone(num)) {
        setErrorFor(phone , 'Phone Number not Valid');
    }
    else {
        setSuccessFor(phone);
    }

    if(pass1 === '') {
        setErrorFor(password , 'Password cannot be blank');
    }
    else {
        setSuccessFor(password);
    }

    if(pass2 === '') {
        setErrorFor(repassword , 'Password cannot be blank');
    }
    else if(pass2 !== pass1) {
        setErrorFor(repassword , 'Password not matching');
    }
    else {
        setSuccessFor(repassword);
    }
}

// functions

function setErrorFor(input , message) {
    let formControls = input.parentElement;
    let small = formControls.querySelector("small");

    small.innerText = message ;

    formControls.className = "form-controls error";
}

function setSuccessFor(input) {
    let formControls = input.parentElement;
    formControls.className = "form-controls success";
}

function isEmail(email) {
    return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/.test(email);
}

function isPhone(phone) {
    return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone);
}

