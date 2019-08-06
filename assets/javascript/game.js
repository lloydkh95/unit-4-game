// GLOBAL variables 
//CRYSTAL variables 
var crystal = {
    blue:
    {
        name:"Blue",
        value: 0
    },
    green:
    {
        name: "Green",
        value: 0
    },
    red:
    {
        name: "Red",
        value: 0
    },
    yellow:
    {
        name: "Yellow",
        value: 0
    }
};
//Scores (Current Target)
var currentScore = 0;
var targetScore  = 0;
//wins and loses
var winCount = 0;
var lossCount = 0;
//Functions

var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function() {
    // Reset the current score
    var currentScore = 0;
    // Set a new Taarget Score
    targetScore = getRandom(19, 120);
    // Set different values for each of the crystals
    crystal.blue.value  = getRandom(1, 12);
    crystal.red.value   = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
    // change the HTMLto reflect all of these changes
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
    //testing console
    console.log("---------------------------")
    console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value)
    console.log("---------------------------")
}
//Respond to clicks on the crystals
var addValues = function(crystal) {
    //change current score
    currentScore = currentScore + crystal.value;

    // change the html to reflect changes in current score
    $("#yourScore").html(currentScore);

    //call the checking function
    checkWin();

    // testing console
    console.log("Your Score: " + currentScore);
}
// Main process
var checkWin = function() {

    // check if currentScore is larger than the targetScore
    if(currentScore > targetScore) {
        alert("Sorry. You lost");
        console.log("You lost");

        // add to loss Counter
        lossCount++;
        
        // change loss count html
        $("#lossCount").html(lossCount);

        // Restart the game
        startGame();
    }

    else if (currentScore == targetScore) {
        alert("Congradulations! You Won!");
        console.log("You Won!");

        //add the win counter
        winCount++;

        // Change win count html
        $("#winCount").html(winCount);

        //Restart the game
        startGame();
    }
}

// Main process
startGame();

$("#blue").click(function(){
    addValues(crystal.red);
});

$("#red").click(function() {
    addValues(crystal.red);
});

$("#green").click(function(){
    addValues(crystal.green);
});

$("#yellow").click(function(){
    addValues(crystal.yellow);
});