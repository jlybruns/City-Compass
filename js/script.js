 
  //Code from Sara 

  // Function to display a welcome message
  function displayWelcomeMessage(existingUser) {
    const welcomeMessageContainer = document.getElementById('welcomeMessage');
    welcomeMessageContainer.textContent = `Welcome back, ${existingUser}! Are you ready for a new adventure?`;
  }
  
function displayWelcomeMessage(existingUser) {
  const welcomeMessageContainer = document.query('#welcomeMessage');
  welcomeMessageContainer.textContent = "Welcome back, " + existingUser + "! Are you ready for a new adventure?";
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

//Call the function to display the welcome message
const existingUser = 'Joel'; // Replace with the actual username
displayWelcomeMessage(existingUser);

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