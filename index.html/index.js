const movies = [
    {
      title: "Now You See Me 1",
      description: "A group of magicians pull off a series of elaborate bank while being pursued by the fbi.",
      ticketPrice: 12.99
    },
    {
      title: "Pixels",
      description: "Government recruites  game experts to fight off an alien invasion in form of classic arcade games .",
      ticketPrice: 11.99
    },
    {
      title: "Superfly",
    description: "A young drug dealer`s attempts to leave the criminal underworld behind and start a new life.",
    ticketPrice: 10.99
    },
    {
        title: "Kingsman",
      description: "A youngman is recruited into a secret organization of gentleman spies to save the world from a megalomaniacal villian.",
      ticketPrice: 9.99

    }
  ];
  
  // Function to display available movies
  function displayMovies() {
    const moviesList = document.getElementById("movies-list");
    moviesList.innerHTML = "";
  
    movies.forEach((movie, index) => {
      const movieElement = document.createElement("div");
      movieElement.innerHTML = `<h2>${movie.title}</h2>
                                <p>${movie.description}</p>
                                <p>Ticket Price: $${movie.ticketPrice.toFixed(2)}</p>`;
  
      // Set the selected movie on click
      movieElement.addEventListener("click", () => {
        selectMovie(index);
      });
  
      moviesList.appendChild(movieElement);
    });
  }
  
  // Function to select a movie
  function selectMovie(index) {
    const selectedMovie = document.getElementById("selected-movie");
    selectedMovie.innerHTML = `<h3>Selected Movie:</h3>
                               <p>${movies[index].title}</p>`;
    
    chooseTicketQuantity(index);
  }
  
  // Function to choose ticket quantity
  function chooseTicketQuantity(movieIndex) {
    const ticketQuantity = document.getElementById("ticket-quantity");
    ticketQuantity.innerHTML = `<h3>Choose Ticket Quantity:</h3>
                                <input type="number" id="quantity-input" min="1" value="1">`;
  
    const quantityInput = document.getElementById("quantity-input");
    quantityInput.addEventListener("change", () => {
      calculateTotalCost(movieIndex, quantityInput.value);
    });
  
    calculateTotalCost(movieIndex, 1);
  }
  
  // Function to calculate total cost
  function calculateTotalCost(movieIndex, quantity) {
    const totalCost = document.getElementById("total-cost");
    const price = movies[movieIndex].ticketPrice;
    const total = price * quantity;
    totalCost.innerHTML = `<h3>Total Cost:</h3>
                           <p>$${total.toFixed(2)}</p>`;
  }
  
  // Function to handle ticket purchase
  function purchaseTickets() {
    const selectedMovie = document.getElementById("selected-movie");
    const ticketQuantity = document.getElementById("ticket-quantity");
    const totalCost = document.getElementById("total-cost");
    const