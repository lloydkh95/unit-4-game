// execute this code when the dom is fully loaded
$(document).ready(function() {

    // current guess number for manipulation
    var yourMatchingNumber = 0;

    // generate the random target number
    var randomNum = randomNumGen();

    // setting up our starting variables.
    var wins = 0;
    var losses = 0;
    var crystals;

    // function that generates random values for our crystals and returns our crystals object
    function randomNumCrystals() {
        // crystals object
        return {
            red: {
                points: Math.floor(Math.random() * 12) + 1,
                imageUrl: "assets/images/red.png"
              },
              blue: {
                points: Math.floor(Math.random() * 12) + 1,
                imageUrl: "assets/images/blue.png"
              },
              yellow: {
                points: Math.floor(Math.random() * 12) + 1,
                imageUrl: "assets/images/yellow.png"
              },
              green: {
                points: Math.floor(Math.random() * 12) + 1,
                imageUrl: "assets/images/green.png"
              }
        };
    }

    // function to create a random number between 19 and 20
    function randomNumGen() {
        return Math.floor(Math.random() * 102) + 19;
    }

    // function that resets the game
    function setGame() {
        // make our current total number 0
        yourMatchingNumber = 0;
        // generate random crystal values
        crystals = randomNumCrystals();
        // generate random target number and render it to the page
        randomNum = randomNumGen();
        $("#random-area").text(randomNum);
    }

    // function that handles updating the page
    function updateDom(didUserWin) {
        $("#win-area").empty();

        // if the user won
        if (didUserWin === true) {
            // show victory message, restart the game, and render the value
            $("#win-area").append($("<p>").text("You Won!"));
            setGame();
            renderMatchingNumber();
        }
        // if the user lost
        else if (didUserWin === false) {
            // show defeat message, restart the game, and render the value
            $("#win-area").append($("<p>").text("You lost!!"));
            setGame();
            renderMatchingNumber();
        }

        // build the win/loss display and append it
        var wSpan = $("<span>").text(wins);
        var lSpan = $("<span>").text(losses);

        var pWins = $("<p>").text("Wins: ");
        var pLosses = $("<p>").text("Losses: ");

        pWins.append(wSpan);
        pLosses.append(lSpan);

        $("#win-area").append(pWins);
        $("#win-area").append(pLosses);
    }

    // function to render our crystals to the page
    function renderCrystals() {
        for (var key in crystals) {
            var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
            var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].imageUrl);
            crystalDiv.append(crystalImg);
            $("#crystal-area").append(crystalDiv);
        }
    }

    // fuction to update our "current guess" number.
    function updateMatchingNumber(crystal) {
        // update our current guess number 
        yourMatchingNumber += crystals[crystal.attr("data-name")].points;
    }

    // function that will render your current guess
    function renderMatchingNumber() {
        var scoreNumDiv = $("<div id='score-number'>").text(yourMatchingNumber);
        $("#score-area").html();
        $("score-area").html(scoreNumDiv);
    }

    // call our functions to start the game
    setGame();
    updateDom();
    renderCrystals();
    renderMatchingNumber();

    // create an on click event for the crystals
    $(".crystals-button").on("click", function(event) {
        // update our current guess number 
        updateMatchingNumber($(this));
        renderMatchingNumber();

        // check to see if you have won or lost
        if (yourMatchingNumber === randomNum) {
            // increment wins restart the game and update the page
            wins++;
            setGame();
            updateDom(true);
        }
        // if our guess number exceeded our target number
        else if (yourMatchingNumber > randomNum) {
            // increment losses restart the game and update the page
            losses++;
            setGame();
            updateDom(false);
        }
    });
});