var networkCheck = Ti.Network.online;

if (networkCheck) {

	var api = require('api');
	api.getData();

} else {
	alert("This app needs network connection. Please enable in your Settings.");

};