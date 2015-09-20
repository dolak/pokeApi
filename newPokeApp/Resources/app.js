var networkCheck = Ti.Network.online;

if (networkCheck) {

	var remoteDB = require('remoteDB');
	remoteDB.cloudLogin();

} else {
	alert("This app needs network connection. Please enable in your Settings.");

};