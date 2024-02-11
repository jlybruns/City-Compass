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
//this is pseudo-code for now. This will have to be wrapped in a function for an onclick event in the form in the UI
  let temp

  if (temp >= 80) {
    hotPacking //this will put items in the DOM to be packed.
  } else if (temp < 80 && temp > 50) {
    warmPacking
  } else {
    coldPacking
  }