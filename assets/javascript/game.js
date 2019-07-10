var random_results;
var lost = 0;
var win = 0;
var previous = 0:

var resetAndStart = function () {
    $(".crystals").empty();
    var images = []}
    random_result = Math.floor(Math.random() * 69) + 30;
    $("result").html("Random Result: " + random_result);
    for(var i = 0; i < 4; i++){
        var random = Math.floor(Math.random() * 11) + 1;
        var crystal = $("<div>");
        crystal.attr({
            "class": "crystal",
            "data-random": random
        });
        crystal.css({
            "backgroung-image":"url"( + images[1] + ),
            "background-size": "cover"
        });

        $(".crystals").append(crystal);
    }
    $("#previous").html("Total Score:" + previous);

}

resetAndStart();

$(document).on('click', "")


// psuedo coding
// a game with 4 crystals and a random result
// every crystal needs to have a random number between 1-12
// a new random number should be generated every single time we win or lose 
// to those 4 crystals
// when clicking any crystal it should add the previous result
// until it equals the final score
// if it is not equal then we start over
// if it is equal then we increment a win counter
