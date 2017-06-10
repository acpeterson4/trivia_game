
<script type="text/javascript">
	var pos = 0;
	var correct = 0;
	var test, test_status, question, choice, choices, chA, chB, chC;

	var questions = [
		["Who won the World Series in 2016?", "Chicago Cubs", "Chicago White Sox", "Cleveland Indians", "New York Yankees", "A"],
		["Who is the Mayor of Chicago?", "Mike Maddigan", "Rahm Emanuel", "Donald Trump", "Rod Blagojevich", "B"],
		["Who is the highest paid athlete in 2017?", "Lebron James", "Rory McIlroy", "Chrisiano Ronaldo", "Kevin Durant", "C"],
		["How long has Chicago been under Democratic Control?", "100 years", "84 years", "15 years", "8 years", "B"],
		["What is the area of Chicago in square miles?", "9", "63", "115", "237", "D"],
		];
		
	function get (x) {
		return document.getElementById(x);
	}
	
	function renderQuestion(){
		test = get("test");
		if(pos >= questions.length){
			test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
			get("test_status").innerHTML = "Test completed";
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
		test.innerHTML = "<h3>"+question+"</h3>";
		// the += appends to the data we started on the line above
		test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
		test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
		test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
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
		if(choice == questions[pos][4]){
			//each time there is a correct answer this value increases
			correct++;
		}
		// changes position of which character user is on
		pos++;
		// then the renderQuestion function runs again to go to next question
		renderQuestion();
	}



</script>