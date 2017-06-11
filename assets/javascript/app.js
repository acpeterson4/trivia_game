//  Execute this code when the DOM has fully loaded.
//		$(document).ready(function() {

// VARIABLES

var pos = 0;
var correct = 0;
var test, test_status, question, choice, choices, chA, chB, chC, chD;

//it would be nice to have the questions come up in random order upon page refresh
var questions = [
		["Who won the World Series in 2016?", "Chicago Cubs", "Chicago White Sox", "Cleveland Indians", "New York Yankees", "A"],
		["Who is the Mayor of Chicago?", "Mike Maddigan", "Rahm Emanuel", "Donald Trump", "Rod Blagojevich", "B"],
		["Who is the highest paid athlete in 2017?", "Lebron James", "Rory McIlroy", "Chrisiano Ronaldo", "Kevin Durant", "C"],
		["How long has Chicago been under Democratic Control?", "100 years", "84 years", "15 years", "8 years", "B"],
		["What is the area of Chicago in square miles?", "9", "63", "115", "237", "D"],
		["How many Presidents' has the US sworn into office?", "40", "42", "44", "45", "D"],
		
		];


// FUNCTIONS

function get (x) {
		return document.getElementById(x);
	}
	
function renderQuestion(){
		test = get("test");
		if(pos >= questions.length){
			test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
			get("test_status").innerHTML = "Game Over";
			// resets the variable to allow users to restart the test
			pos = 0;
			correct = 0;
			// stops rest of renderQuestion function running when test is completed
		return false;
		}
		get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
		question = questions[pos][0];
		chA = questions[pos][1];
		chB = questions[pos][2];
		chC = questions[pos][3];
		chD = questions[pos][4];
		test.innerHTML = "<h3>"+question+"</h3>";
		// the += appends to the data we started on the line above
		test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
		test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
		test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
		test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
		test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
	}
	
function checkAnswer(){
		// use getElementsByName because we have an array which it will loop through
		choices = document.getElementsByName("choices");
		for(var i=0; i<choices.length; i++){
			if(choices[i].checked){
				choice = choices[i].value;
			}
		}
		// checks if answer matches the correct choice
		if(choice == questions[pos][5]){
			//each time there is a correct answer this value increases
			correct++;
		}
		// changes position of which character user is on
		pos++;
		// then the renderQuestion function runs again to go to next question
		renderQuestion();
	}

window.addEventListener("load", renderQuestion, false);

// MAIN PROCESSES

var readyTime;
 
$(function() {
    readyTime = jQuery.now();
});
 
$.afterDOMReady = $.createCache(function( defer, delay ) {
    delay = delay || 0;
    $(function() {
        var delta = $.now() - readyTime;
        if ( delta >= delay ) {
            defer.resolve();
        } else {
            setTimeout( defer.resolve, delay - delta );
        }
    });
});

