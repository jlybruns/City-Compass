//function to validate email checking for @ symbol
function validateUser(email, password) {
    if(!email) {
        throw new Error('You must provide a valid email.');
        return false;
    }
    if (!email.includes('@')) {
      throw new Error('Your email must contain the @ symbol');
      return false;
    }
    if (password.length < 8) {
        throw new Error('Password must be 8 characters or greater');
        return false;
      }
      if (!/[0-9]/g.test(password)) {
        throw new Error('Password must contain at least one number');
        return false;
      }
      return true;
  }

  function handleSubmit() {
    let email = document.getElementById("floatingInput").value;
    let password = document.getElementById("floatingPassword").value;
    if (validateUser(email, password)){
        alert('Validation successful');
    }
  }
