





















// let form = document.getElementById("form");
// let email = document.getElementById("email");
// let password = document.getElementById("password");

// form.addEventListener('submit' , (e) => {
//     e.preventDefault();

//     checkInputs();
// });


// function checkInputs() {
//     let em = email.value.trim();
//     let pass1 = password.value.trim();

//     if(em ==="") {
//         setErrorFor(email , 'Email cannot be blank');
//     }
//     else if(!isEmail(em)){
//         setErrorFor(email , 'Email is not Valid');
//     }
//     else {
//         setSuccessFor(email);
//     }


// }


// function setErrorFor(input , message) {
//     let formControls = input.parentElement;
//     let small = formControls.querySelector("small");

//     small.innerText = message ;

//     formControls.className = "form-mp error";
// }

// function setSuccessFor(input) {
//     let formControls = input.parentElement;
//     formControls.className = "form-mp success";
// }

// function isEmail(email) {
//     return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/.test(email);
// }



// let parameters = {
//     count : false ,
//     letters : false , 
//     numbers : false ,
//     special : false 
// }

// let strengthBar  = document.getElementById("strength-bar");
// let msg = document.getElementById("msg");

// function strengthChecker (){
//     let pwd = document.getElementById("pwd").value;

//     parameters.letters = (/[A-Za-z]+/.test(pwd))?true:false;
//     parameters.numbers = (/[0-9]+/.test(pwd))?true:false;
//     parameters.special = (/[!\"@#$%/^&*()?~`\\.\|';:+*_-]+/.test(pwd))?true:false;
//     parameters.count = (pwd.length > 7)?true:false;
    
//     let barLength = object.values(parameters).filter(value=>value);

//     strengthBar.innerHTML = "";
//     for(let i in barLength){
//         let span = document.createElement("span");
//         span.classList.add("strength");
//         strengthBar.appendChild(span);
//     }
// }


// let email = document.getElementById("email");
// let emailLabel = document.getElementById("lbl1");

// let error = document.getElementById("error");

// function validate(){
    let regexp =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
//     if(regexp.test(email.value)){
//         emailLabel.innerHTML = "Valid";
//         emailLabel.style.color = "green";
//         emailLabel.style.visibility = "visible";
//     }
//     else{
//         emailLabel.innerHTML = "Invalid";
//         emailLabel.style.visibility = "visible";
//     }

// }


function getPasswordStrength(password)