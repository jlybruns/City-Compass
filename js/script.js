//function to validate email checking for @ symbol
const email = document.getElementById('floatingInput');
const password = document.getElementById('floatingPassword');
const validCheck = document.getElementById('validate');
validCheck.addEventListener('click', validateEmail);
validCheck.addEventListener('click', validatePassword);


function validatePassword() {
    let passwordValid = password.value;
    if (!passwordValid) {
        alert('You must input a password.');
    } else if (passwordValid.length < 8) {
        alert('Your password must be 8 characters or longer.');
    } else if (!/[0-9]/g.test(passwordValid)) {
        alert('Your password must contain at least one number');
    } else {
        alert('Password created.')
    }
}

function validateEmail() {
    let emailValid = email.value;
    if(!emailValid) {
        alert('You must provide a valid email.');
    }
    if (!emailValid.includes('@')) {
      alert('Your email must contain the @ symbol');
    }
  }

  function handleSubmit() {
    validateUser(email, password)
    {
        alert('Validation successful');
    }
  }
//consider making a class of packing and passing in shirts, bottoms, and shoes to the constructor
  const coldPacking = {
    shirts: ["sweaters", "long sleeves", "flannels"],
    bottoms: ["jeans", "pants", "sweatpants"],
    shoes: ["boots", "walking shoes", "slippers"],
    outerwear: ["coat", "scarf", "gloves"]
  }
  const moderatePacking = {
    shirts: ["short sleeves", "long sleeves", "t-shirts", "button up"],
    bottoms: ["jeans", "pants", "sweatpants"],
    shoes: ["boots", "walking shoes", "slippers"],
    outerwear: ["jacket", "hoodie"]
  }

  const hotPacking = {
    shirts: ["t-shirts", "tanktops", "short sleeves"],
    bottoms: ["shorts", "linen pants", "lightweight cotton"],
    shoes: ["sandals", "tennis shoes", "slippers"],
  }
// this is pseudo-code for now. This will have to be wrapped in a function for an onclick event in the form in the UI
  let temp

  if (temp >= 80) {
    hotPacking //this will put items in the DOM to be packed.
  } else if (temp < 80 && temp > 50) {
    warmPacking
  } else {
    coldPacking
  }