//function to validate email checking for @ symbol
function validateEmail(email) {
    if (!email.includes('@')) {
      throw new Error('Your email must contain the @ symbol');
    }
  }

  // Task 2: Validate Password. Not sure we want or need this, but it's here to use.
function validatePassword(password) {
    if (password.length < 8) {
      throw new Error('Password must be 8 characters or greater');
    }
    if (!/[0-9]/g.test(password)) {
      throw new Error('Password must contain at least one number');
    }
  }