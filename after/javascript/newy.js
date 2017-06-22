
document.addEventListener("DOMContentLoaded",
	function (event) {
		function sayHello(event) {
			console.log(event);
			this.textContent = "Said it";
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
				  document.querySelector("#title").textContent;
				title += "& lovin it";
				document.querySelector("h1").textContent = title;
			}

		}

		document.querySelector("button").addEventListener("click", sayHello);
		document.querySelector("body").addEventListener("mousemove", 
			function (event) {
				//console.log(event.clientX);
				//console.log(event.clientY);
			});
	}
);


// document.querySelector("button")
//   .onClick = sayHello;