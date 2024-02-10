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

  //Code from Sara 

  // Function to display a welcome message
function displayWelcomeMessage(username) {
  console.log(username);
  const welcomeMessageContainer = document.getElementById('welcomeMessage');
  welcomeMessageContainer.textContent = `Welcome back, ${username}! Are you ready for a new adventure?`;
}

// Function to perform a search in the database
async function performSearchInDatabase(searchTerm) {
  try {
      // For demonstration purposes, return dummy results
      return [
          { city: 'Best weather in Indiana' },
          { city: 'Best transportation in New York' },
          { city: 'Best food in Portland' }
      ];
  } catch (error) {
      console.error('Error performing search in database:', error);
      return []; // Return empty array if an error occurs
  }
}

// Function to handle search form submission
document.getElementById('searchForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  const searchTerm = document.getElementById('searchInput').value;
  const results = await performSearchInDatabase(searchTerm);
  displaySearchResults(results);
});

// Function to display search results
function displaySearchResults(results) {
  const searchResultsDiv = document.getElementById('searchResults');
  searchResultsDiv.innerHTML = ''; // Clear previous results
  results.forEach(result => {
      const resultElement = document.createElement('div');
      resultElement.textContent = result.city; // Display city name
      searchResultsDiv.appendChild(resultElement);
  });
}

// Function to show the user's location and weather
async function showLocationAndWeather() {
  try {
      if ("geolocation" in navigator) {
          const position = await new Promise((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
          });
          
          const { latitude, longitude } = position.coords;
          const apiKey = 'c55743438de6188555736118c6cbb2d4';
          const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
          
          const response = await fetch(weatherUrl);
          const weatherData = await response.json();
          
          const { main, weather, name: cityName } = weatherData;
          const { temp } = main;
          const { description } = weather[0];
          
          const weatherInfoContainer = document.getElementById('weatherInfo');
          weatherInfoContainer.innerHTML = `
              <p>City: ${cityName}</p>
              <p>Temperature: ${temp}°C</p>
              <p>Weather: ${description}</p>
          `;
      } else {
          console.log('Geolocation is not supported by this browser.');
      }
  } catch (error) {
      console.error('Error fetching weather:', error);
  }
}

// Call the function to display the welcome message
const existingUser = 'Joel'; // Replace with the actual username
displayWelcomeMessage(existingUser);
console.log(existingUser);

// Call the function to show location and weather
showLocationAndWeather();

// Sample search queries with image URLs
const searchQueries = [
  { name: 'New York', imageUrl: 'img/New York.png' },
  { name: 'Indianapolis', imageUrl: 'img/Indianapolis' },
  { name: 'Portland', imageUrl: 'img/Portland.jpg' },
  { name: 'Puerto Rico', imageUrl: 'img/PuertoRico.png' },
];

// Function to display trending destinations with images
function displayTrendingDestinations(queries) {
  const trendingDestinationsContainer = document.getElementById('trendingDestinations');
  trendingDestinationsContainer.innerHTML = ''; // Clear previous list
  
  queries.slice(0, 3).forEach(query => {
      const listItem = document.createElement('li');
      const destinationName = document.createElement('span');
      const destinationImage = document.createElement('img');

      destinationName.textContent = query.name;
      destinationImage.src = query.imageUrl;
      destinationImage.alt = query.name;

      listItem.appendChild(destinationImage);
      listItem.appendChild(destinationName);
      trendingDestinationsContainer.appendChild(listItem);
  });
}

// Call the function to display trending destinations with images
displayTrendingDestinations(searchQueries);