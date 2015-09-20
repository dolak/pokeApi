var networkCheck = Ti.Network.online;

if (networkCheck) {

	var api = require('api');
	api.getUrl();

} else {
	alert("This app needs network connection. Please enable in your Settings.");

};