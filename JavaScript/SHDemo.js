//import countapi from "countapi-js";
// documentation: https://www.npmjs.com/package/countapi-js

document.getElementById('date').innerHTML = new Date().toDateString();

const form = document.getElementById('form');
const msgInput = document.getElementById('msgInput');
// const hidden = document.getElementById("hidden");

// log how many ppl visited this page
/*
countapi.visits().then((result) => {
	console.log("count-api visited", result.value);
});
*/

form.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("submittion received");
	var sMsgInput = msgInput.value
	// the link to the next chapter if correct
	var sJumpTo = "html/" + sMsgInput + ".html";

	// redirect
	window.location.href = sJumpTo;

	
/* deprecated -- use page redirection instead
 	// original codes for type 'hidden"
	// check if input matches expected
	if (msgInput.value != "ATL"){
		//console.log("wrong input");
		alert("Not really... Try again");
		location.reload();
	} else {
		// console.log("right input")
		hidden.style.opacity = 1;
	}
*/
});
