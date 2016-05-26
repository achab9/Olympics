document.getElementById("nav01").innerHTML = 

		"<button><a href = 'AboutPlayers.html'> History </a> </button> <br>";

document.getElementById("vote").innerHTML = 

	"<button><a href = 'votenow.html'> Vote </a> </button> <br>";

document.getElementById("home").innerHTML = 

	"<button><a href = 'index.html'> Home </a> </button> <br>";


function login() {

	var log_in = document.getElementById("users").value;
	console.log(log_in);

	var passes = document.getElementById("pass").value;
	console.log(passes);

}

function join() {

	var first_name = document.getElementById("firstname").value;
	console.log(first_name);

	var last_name = document.getElementById("lastname").value;
	console.log(last_name);

	var user_name = document.getElementById("username").value;
	console.log(user_name);

	var pass_word = document.getElementById("password").value;
	console.log(pass_word);

}

