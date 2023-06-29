# Flataculties

Flataculties is an app where you can vote for the cutest animals! This project demonstrates the frontend implementation of Flataculties using a local API server to fetch animal data and display it on the user interface.

## How to Run the Project

### Prerequisites
Node.js and npm (Node Package Manager) should be installed on your machine.

### Setup
Clone the repository:
```
git clone https://github.com/SirCartermm/Flataculties-.git
```
Navigate to the project directory:
```
cd Flataculties-
```
Install the dependencies:
```
npm install
```
### Start the Application
Start the local API server:
```
json-server --watch db.json
```
Open the index.html file in a web browser.

### Usage

- Click on the "Show Animal Names" button to toggle the display of animal names. When clicked, the names of the animals will appear in a list.
- Click on an animal name to view its details, including the animal's image and the number of votes it has received.
- To vote for an animal, click the "Vote" button in the animal's details section. The vote count will be incremented on the UI, but no persistence is implemented.
