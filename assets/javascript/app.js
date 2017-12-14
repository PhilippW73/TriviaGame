var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
//var count = 0;

// var questions = [{
// 	question: "What is the highest grossing movie?",
// 	choices: ["The Avengers", "Titanc", "National Lampoon's Christmas Vacation", "Avatar"],
// 	correctAnswer: 3
// 	}, 
// {
// 	question: "What is the highest grossing movie franchise?",
// 	choices: ["Marvel Universe", "Harry Potter", "Fast and Furious", "Star Wars"],
// 	correctAnswer: 0
// 	},
// {
// 	question: "Who is the highest paid actor in 2017?",
// 	choices: ["Chevy Chase", "Mark Wahlberg", "Shah Rukh Khan", "Tom Cruise"],
// 	correctAnswer: 1
// 	},
// {
// 	question: "What is the most watched TV season finale?",
// 	choices: ["MacGyver", "Home Improvement", "Seinfeld", "MASH"],
// 	correctAnswer: 3
// },]

var number = 30;
var intervalId;


$(document).ready(function () {


	$(".game-container").hide();
	$(".end").hide();

	$("#start").click(function(){
		$(".start").hide();
		$(".game-container").show();
		countdown();

	});
    
    function countdown() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
      number--;
      $("#timer").html("<h2>" + number + "</h2>");
      if (number === 0) {
        stop();
        alert("Time Up!");
        $(".questions").hide();
        alert("Press Submit Button to see scores")
      }
    }

    function stop() {
      clearInterval(intervalId);
    }

//for(var i=0; i < questions.length; i++);

	$("#getValue").click(function(){
		$(".start").hide();
		$(".end").show();
		$(".game-container").hide();
		$(".countdown").hide();

		stop();

	    var selValue1 = $('input[name=question1]:checked').val(); 
	    console.log(selValue1);
	    selValue1 = parseInt(selValue1);

	    var selValue2 = $('input[name=question2]:checked').val(); 
	    console.log(selValue2);
	    selValue2 = parseInt(selValue2);

	    var selValue3 = $('input[name=question3]:checked').val(); 
	    console.log(selValue3);
	    selValue3 = parseInt(selValue3);

	    var selValue4 = $('input[name=question4]:checked').val(); 
	    console.log(selValue4);
	    selValue4 = parseInt(selValue4);

		var arr = [];

		arr.push(selValue1);
		arr.push(selValue2);
		arr.push(selValue3);
		arr.push(selValue4);

		console.log(arr);

		for (var i = 0; i < arr.length; i++) {
		    if (arr[i] === 1) {
		        correctAnswers++;
		    } 

		    else if (arr[i] === 0) {
		        incorrectAnswers++;
		    } 
		    
		    else {
		    	unanswered++;
		    }
		}

	    console.log(correctAnswers);
	    console.log(incorrectAnswers);
	    console.log(unanswered);

		$("#correctAnswers").html(correctAnswers);
		$("#incorrectAnswers").html(incorrectAnswers);
		$("#unanswered").html(unanswered);



	});



});



// <!-- variable
// - correct
// - incorrect
// - unanswered
// - questions
// - answers


// Start Game on click
// Show 4 questions including a timer showing time left to answer the question
// submit button to submit answer (submit event on form)
// if question is answered correctly within the time given, then show a congratulations info (picture, video etc) and add a win to the counter (insert timer to show answer)
// else show the correct answer and add a loss to losses
// Set timer to show new questions

// at the end of the game, show overview page with the info about how many questions were answered correctly / incorrectly / unanswered
//  -->