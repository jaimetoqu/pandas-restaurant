// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

/*document.addEventListener("DOMContentLoaded",
	function (event) {
		function sayHello (event) {
			console.log(event);
			this.textContent = "said it";
			var name = 
				document.getElementById("name").value;
			var message = "<h2>hello " + name + "</h2>";
			// document
			//   .getElementById("content")
			//   .textContent = message;
			document
			  .getElementById("content")
			  .innerHTML = message;

			if (name === "student") {
				var title = 
				  document
				    .querySelector("#title")
				    .textContent;
				title += " & lovin it";
				document
				    .querySelector("h1")
				    .textContent = title;
			}

		}

		document.querySelector("button")
	  		.addEventListener("click", sayHello);


	  	document.querySelector("body")
	  	  .addEventListener("mousemove", 
	  	  	function (event) {
	  	  		if (event.shiftKet === true) {
	  	  			console.log(event.clientX);
	  	  			console.log(event.clientY);
	  	  		}
	  	  		
	  	  	}
	  	  );
	}
);*/


// document.querySelector("button")
//   .onclick = sayHello;

function make(multiplier) {

	function b() {
		console.log("hello");
	}
	b();

	return (
		function (x) {
			return multiplier * x;
		}
	  );
}
var double = make(2);
console.log(double(10));



