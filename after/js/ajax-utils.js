(function (global) {
	//set up a namespace for our utility
	var ajaxUtils = {};

	//returns an HTTP request object
	function getRequestObject() {
		if (window.XMLHttpRequest) {
			return (new XMLHttpRequest());
		}
		else if (window.ActiveXObject) {
			//for very old IE browsers (optional)
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else {
			global.alert("Ajax is not supported");
			return(null);
		}
	}


	//Makes an Ajax GET request to 'requestUrl'
	ajaxUtils.sendGetRequest = 
	  function(requestUrl, responseHandler, isJsonResponse) {
	  	var request = getRequestObject();
	  	request.onreadystatechange = 
	  	  function() {
	  	  	handleResponse(request, responseHandler, isJsonResponse);
	  	  };
	  	request.open("GET", requestUrl, true);
	  	request.send(null); //for POST only, () where you put the body of the request
	  };

	//Only calls user provided 'responseHandler'
	//function if response is ready
	//and not an error
	function handleResponse(request, responseHandler, isJsonResponse) {
		// try if doesnt work (4 == request.readyState)
		if ((request.readyState == 4) && (request.status == 200)) {
			//responseHandler(request); previous this if only contains this content and remove isJsonResponse from all

			//Default to isJsonResponse = true
			if (isJsonResponse == undefined) {
				isJsonResponse = true;
			}

			if (isJsonResponse) {
				responseHandler(JSON.parse(request.responseText));
			}
			else {
				responseHandler(request.responseText);
			}

		}
	}

	//Expose utility to the global object
	global.$ajaxUtils = ajaxUtils;

})(window);