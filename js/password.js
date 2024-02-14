//function to validate email checking for @ symbol
const email = document.getElementById('floatingInput');
const password = document.getElementById('floatingPassword');
// const username = document.getElementById('username');
const validCheck = document.getElementById('validate');
validCheck.addEventListener('click', validateEmail);
validCheck.addEventListener('click', validatePassword);

function validateEmail() {
    let emailValid = email.value;
    if(!emailValid) {
        alert('You must provide a valid email.');
    }
    if (!emailValid.includes('@')) {
      alert('Your email must contain the @ symbol');
    } else {
        validatePassword();
    }
  }

function validatePassword() {
    let passwordValid = password.value;
    if (!passwordValid) {
        alert('You must input a password.');
    } else if (passwordValid.length < 8) {
        alert('Your password must be 8 characters or longer.');
    } else if (!/[0-9]/g.test(passwordValid)) {
        alert('Your password must contain at least one number');
    } else {
        alert('Password created.');
        window.location.assign("landing.html");
    }
}

 

