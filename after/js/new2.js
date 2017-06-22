//event handling
//means this is only going to execute when page is loaded all HTML content but hasnt loaded CSS or pictures
/*document.addEventListener("DOMContentLoaded", 

    function (event) {

   	    // Unobstrusive event binding
   	    document.querySelector("button")
   	      .addEventListener("click", function () {
   	      	/*var self = this;
	   	    var name = "";*/

	   	    //Call server to get the name
	   	    /*$ajaxUtils
	   	      .sendGetRequest("data/name.txt", 
	   	        function (request) {
	   	        	// self.name = request.responseText;
	   	        	var name = request.responseText;
	   	        	document.querySelector("#content")
			          .innerHTML = "<h2>Hello " + name;
	   	        });
			/*document.querySelector("#content")
			   .innerHTML = "<h2>Hello " + self.name + "</h2>";*/

//   	      });
   	    
//    }
//);



document.addEventListener("DOMContentLoaded", 

    function (event) {

   	    // Unobstrusive event binding
   	    document.querySelector("button")
   	      .addEventListener("click", function () {

	   	    //Call server to get the name
	   	    $ajaxUtils
	   	      .sendGetRequest("data/name.json", 
	   	        function (res) {
	   	        	
	   	        	var message = res.firstName + " "
	   	        	if (res.likesChineseFood) {
	   	        		message += " likes Chinese food";
	   	        	}
	   	        	else {
	   	        		// will show this cause likesChineseFood is false
	   	        		message += " doesnt like Chinese food";
	   	        	}
	   	        	message += " and uses ";
	   	        	message += res.numberOfDisplays + 1;
	   	        	message += " displays for coding";
	   	        	document.querySelector("#content")
			          .innerHTML = "<h2>" + message + "</h2>";
	   	        });

   	      });
   	    
    }
);
