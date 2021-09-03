let form = document.getElementById("form");
let username = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let repassword = document.getElementById("repassword");
let passwordStrength = document.getElementById("password-strength");

function myFunction(show){
    show.classList.toggle('fa-eye-slash');
}

function toggle() {
    if(state) {
        password.setAttribute("type" , "password");
        state : false ;
    }
    else {
        password.setAttribute("type" , "text");
        state : true;
    }
}

form.addEventListener('submit' , (e) => {
    e.preventDefault();

    checkInputs();
});

form.addEventListener('keyup' , (e) => {
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
    else if(strengthChecker(pass1)) {
        
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

function strengthChecker(password) {

    let strength = 0 ;
    if(password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
        strength += 1;
    }
    if(password.match(/([0-9])/)) {
        strength += 1;
    }
    if(password.match(/([!,@,#,$,%,^,&,*,_,~,?])/)){
        strength += 1;
    }
    if(password.length > 7){
        strength += 1;
    }

    // if(strength == )

    if(strength == 0){
        passwordStrength.style = "width:0%";
    }
    else if(strength == 2){
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.add('progress-bar-danger');
        // passwordStrength.style.backgroundColor = "red";
        passwordStrength.innerText = "weak";
        passwordStrength.style = "width :10%";
    }
    else if(strength == 3){
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-warning');
        passwordStrength.style = "width: 60%";
    }

    else if(strength == 4){
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-success');
        passwordStrength.style = "width: 100%";
    }


}
