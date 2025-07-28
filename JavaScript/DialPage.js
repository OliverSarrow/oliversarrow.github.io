const form = document.getElementById('form');
const msgInput = document.getElementById('msgInput');

form.addEventListener("submit", (e) => {
	e.preventDefault();
	// console.log("submittion received");
	var sMsgInput = msgInput.value;
	var sJumpTo = "";
	
	var sMsgInputToLower = sMsgInput.toLowerCase();

	// the link to the next chapter if correct
	sJumpTo = "html/" + sMsgInputToLower + ".html";

	// console.log("sJumpTo", sJumpTo);

	// redirect
	window.location.href = sJumpTo;

});
