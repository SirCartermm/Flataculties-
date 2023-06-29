document.addEventListener('DOMContentLoaded', () => {
    // Fetch animal names from the API
    axios.get('http://localhost:3000/characters')
      .then(response => {
        const animalList = response.data;
        updateAnimalList(animalList);
      })
      .catch(error => {
        console.error('Error fetching animal names:', error);
      });
  
    // Show animal names when the button is clicked
    const showNamesButton = document.getElementById('showNamesButton');
    showNamesButton.addEventListener('click', toggleAnimalListVisibility);
  
    function toggleAnimalListVisibility() {
      const animalList = document.getElementById('animalList');
      const isHidden = animalList.style.display === 'none';
  
      if (isHidden) {
        showNamesButton.textContent = 'Hide Animal Names';
        animalList.style.display = 'block';
      } else {
        showNamesButton.textContent = 'Show Animal Names';
        animalList.style.display = 'none';
      }
    }
  
    function updateAnimalList(animalList) {
      const animalListContainer = document.getElementById('animalList');
  
      animalList.forEach(animal => {
        const listItem = document.createElement('li');
        listItem.textContent = animal.name;
        listItem.addEventListener('click', () => {
          displayAnimalDetails(animal.id);
        });
        animalListContainer.appendChild(listItem);
      });
    }
  
    function displayAnimalDetails(animalId) {
      axios.get(`http://localhost:3000/characters/${animalId}`)
        .then(response => {
          const animalDetails = response.data;
          updateAnimalDetails(animalDetails);
        })
        .catch(error => {
          console.error('Error fetching animal details:', error);
        });
    }
  
    function updateAnimalDetails(animalDetails) {
      const animalDetailsContainer = document.getElementById('animalDetails');
      animalDetailsContainer.innerHTML = '';
  
      const animalImage = document.createElement('img');
      animalImage.src = animalDetails.image;
      animalImage.alt = animalDetails.name;
  
      const voteButton = document.createElement('button');
      voteButton.textContent = 'Vote';
      voteButton.addEventListener('click', () => {
        incrementVoteCount(animalDetails);
      });
  
      const voteCount = document.createElement('p');
      voteCount.textContent = `Votes: ${animalDetails.votes}`;
  
      animalDetailsContainer.appendChild(animalImage);
      animalDetailsContainer.appendChild(voteButton);
      animalDetailsContainer.appendChild(voteCount);
    }
  
    function incrementVoteCount(animalDetails) {
      animalDetails.votes++;
      updateAnimalDetails(animalDetails);
    }
  });
  