console.log("testing");

// Turn Value and Total Count InnerHtml Vars
var playerOneValue = document.getElementById("playerOneValue");
var playerTwoValue = document.getElementById("playerTwoValue");
var playerOneCount = document.getElementById("playerOneCount");
var playerTwoCount = document.getElementById("playerTwoCount");


// RedBox And BlueBox
var redBox = document.getElementById(playerOne);


// Count per turn vars
var playerOne = 0;
var playerTwo = 0;

function playerOneButton() {

    //generate Random number between 1 and 6
    var playerOneRandom = Math.ceil((Math.random() * 6));
    playerOne += playerOneRandom;

    //logs
    console.log("Turn Value", playerOneRandom);
    console.log("Total Count", playerOne);

    // Update InnerHtml 
    playerOneValue.innerHTML = `<h3>${playerOneRandom}</h3>`;
    playerOneCount.innerHTML = `<h3>${playerOne}</h3>`;

    if (playerOne >= 50) {
        playerOne = 0; // Count reset
        alert("Player one Reached 50!");
    };

    //Moveing PlayerOne Marker according to playerOneCount
    movePlayer('red', playerOne)
};

function playerTwoButton() {

    //generate Random number between 1 and 6
    var playerTwoRandom = Math.ceil((Math.random() * 6));
    playerTwo += playerTwoRandom;

    //logs
    console.log("Turn Value", playerTwoRandom);
    console.log("Total Count", playerTwo);

    // Update InnerHtml 
    playerTwoValue.innerHTML = `<h3>${playerTwoRandom}</h3>`;
    playerTwoCount.innerHTML = `<h3>${playerTwo}</h3>`;

    if (playerTwo >= 50) {
        playerTwo = 0; // Count reset
        alert("Player one Reached 50!");
    };

    //Moveing PlayerOne Marker according to playerOneCount
    movePlayer('blue', playerTwo)
};


// Function to move the player to a specific box
function movePlayer(color, position) {
    // Clear the player's previous position
    var allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(function (box) {
        if (box.querySelector(`.${color}`)) {
            box.querySelector(`.${color}`).remove(); // Remove previous marker
        }
    });

    // Find the new box
    var newBox = document.getElementById(`box_${position}`);

    if (newBox) {
        // Create a marker for the player
        var playerMarker = document.createElement('div');
        playerMarker.classList.add(color); // Add color class to differentiate players
        playerMarker.style.width = '20px';
        playerMarker.style.height = '20px';
        playerMarker.style.backgroundColor = color; // Set marker color
        playerMarker.style.borderRadius = '50%'; // Make it a circle

        // Append the marker to the new box
        newBox.appendChild(playerMarker);
    }
}