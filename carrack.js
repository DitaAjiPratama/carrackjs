function sendHttpRequest(url, method, data, callback, contentType = "multipart/form-data") {
  var xhr = new XMLHttpRequest();

  xhr.open(method, url, true);
  xhr.setRequestHeader("Content-Type", contentType);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // Successful response
        var response;
        if (contentType === "application/json") {
          response = JSON.parse(xhr.responseText);
        } else {
          response = xhr.responseText;
        }
        callback(null, response);
      } else {
        // Error response
        callback(xhr.status, null);
      }
    }
  };

  var requestData;
  if (contentType === "application/json") {
    requestData = JSON.stringify(data);
  } else {
    requestData = data;
  }

  xhr.send(requestData);
}
