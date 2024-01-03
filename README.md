# CarrackJS

Vanilla JS library for a HTTP Requests

## usage

Example usage with JSON data:

	var apiUrlJson = "https://example.com/api/json";
	var requestDataJson = {
		key1: "value1",
		key2: "value2"
	};

	sendHttpRequest(apiUrlJson, "POST", requestDataJson, function (error, response) {
		if (error) {
		    console.error("Error:", error);
		}
		else {
		    console.log("JSON Response:", response);
		}
	}, "application/json");

Example usage with non-JSON data (e.g., form data):

	var apiUrlFormData = "https://example.com/api/formdata";
	var formData = new FormData();
	formData.append("key1", "value1");
	formData.append("key2", "value2");

	sendHttpRequest(apiUrlFormData, "POST", formData, function (error, response) {
		if (error) {
		    console.error("Error:", error);
		}
		else {
			console.log("Form Data Response:", response);
		}
	}, "multipart/form-data");
