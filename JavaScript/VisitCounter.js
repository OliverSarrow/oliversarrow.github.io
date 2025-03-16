import countapi from 'countapi-js';

const form = document.getElementById('form');

form.addEventListener("resetCounter", (e) => {
  e.preventDefault();
	console.log("Reset command received");
  
});
