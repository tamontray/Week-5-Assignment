$( document ).ready(function() {

//create variable to store the input value
	var city;

//Create listening event on user submit
	$( "#entry" ).submit(cityPic);


//create function to run when user submits

	function cityPic() {
		//prevent default refresh
		event.preventDefault();

		//get value from user input, store in city variable
		var city = $("#city-type").val();

		//clean that potentially nasty data!
		city = cleanData(city);
	
		//change background based on user input
		backgroundChange(city);

		//clear input box
		$("#city-type").val('');

		console.log(city);

	} 


//Create function to change background based on user inputs. 
	function backgroundChange(input) {

		//It took a long while to figure out that I needed to remove classes if I wanted to freely switch between cities. 
		$("body").removeClass();


		//not sure this functionality of indexOf would be user friendly, but the function will change background regardless of where the 
		//correct text appears. Any idea how I could choose the first city found in the string? Right now it will always apply the background 
		//based on the order of my if functions (If I enter "LA-SF-NYC it will display NYC background because that if statement comes first.)
		if (input.indexOf("NEWYORK") > -1 || input.indexOf("NYC") > -1 || input.indexOf("NEWYORKCITY") > -1 || input.indexOf("NY") > -1) {
			$("body").addClass("nyc");
		}	

		else if (input.indexOf("SF") > -1 || input.indexOf("SANFRANCISCO") > -1 || input.indexOf("BAYAREA") > -1) {
			$("body").addClass("sf");
		}

		else if (input.indexOf("LOSANGELES") > -1 || input.indexOf("LA") > -1 || input.indexOf("LAX") > -1) {
			$("body").addClass("la");
		}

		else if (input.indexOf("ATX") > -1 || input.indexOf("AUSTIN") > -1 || input.indexOf("TEXAS") > -1) {
			$("body").addClass("austin");
		}

		else if (input.indexOf("SYDNEY") > -1 || input.indexOf("SYD") > -1 || input.indexOf("OPERA") > -1) {
			$("body").addClass("sydney");
		}

	}


	//I ONLY WANT [UPPERCASE] TEXT! Are there "best practices" for cleaning input data? 

	function cleanData(input) {

		//remove numbers
		input = input.replace(/\d+/g,'');

		//remove special characters
		input = input.replace(/[^a-z0-9\s]/gi, '');

		//remove spaces
		input = input.replace(/\s+/g, '');

		//change to uppercase
		input = input.toUpperCase();

		return input;
	}



	console.log("ready!");
});

