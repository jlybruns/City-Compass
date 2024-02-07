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