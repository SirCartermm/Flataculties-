function displayAnimalDetails(animal) {
    const nameElement = document.getElementById('animal-name');
    const imageElement = document.getElementById('animal-image');
    const votesElement = document.getElementById('animal-votes');
    const voteButton = document.getElementById('vote-button');

    nameElement.textContent = animal.name;
    imageElement.src = animal.image;
    votesElement.textContent = `Votes: ${animal.votes}`;

    // Event listener for voting button
    voteButton.addEventListener('click', function() {
        animal.votes++;
        votesElement.textContent = `Votes: ${animal.votes}`;
      });
  
    // Show the details section
    const detailsSection = document.querySelector('.animal-details');
    detailsSection.style.display = 'block';
  }

  

    

  // Function to display animal list
  function displayAnimalList(characters) {
    const animalListElement = document.querySelector('.animal-list');

    characters.forEach(function(animal) {
      const listItem = document.createElement('li');
      listItem.textContent = animal.name;

      // Event listener for clicking on an animal name
      listItem.addEventListener('click', function() {
        displayAnimalDetails(animal);
      });

      animalListElement.appendChild(listItem);
    });
  }
  

  // Fetch data from the endpoint
  fetch('db.json')
    .then(response => response.json())
    .then(data => {
      const characters = data.characters;
      displayAnimalList(characters);
    })
    .catch(error => console.error('Error:', error));