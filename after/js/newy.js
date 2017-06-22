document.addEventListener("DOMContentLoaded", 
	function (event) {
		
		document.querySelector("button")
		  .addEventListener("click", function () {


		  	$ajaxUtils
		  	  .sendGetRequest("/data/name.json", 
		  	  	function (res) { /* request is the response*/
		  	  		var message = res.firstName;
		  	  		if (res.likesChineseFood) {
		  	  		  message += " likes Chinese food";
		  	  		}
		  	  		else {
		  	  		  message += " doesnt like Chinese food";
		  	  		}
		  	  		message += " and uses ";
		  	  		message += res.numberOfDisplays;
		  	  		message += " displays of coding";

		  	  		document.querySelector("#content")
		  	  		  .innerHTML = "<h2>" + message + "</h2>";
		  	  	});	
		  });
	}
);
