var networkCheck = Ti.Network.online;

if (networkCheck) {

	var cloud = require('cloud');
	cloud.cloudLogin();

} else {
	alert("This app needs network connection. Please enable in your Settings.");

	var api = require('api');
	api.getUrl();
};