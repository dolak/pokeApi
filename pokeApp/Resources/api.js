var getData = function(){
	console.log("getData");
	
	var url = "http://pokeapi.co/api/v1/pokemon/1/";
	console.log(url);
	var xhr = Ti.Network.createHTTPClient({
		onload : function(x){
			console.log(x);
			console.log(this.responseText);
			
			var json = JSON.parse(this.responseText);
			
			var pokemonDex = {
				name    : json.name,

			};

			
			var save = require("database");
			save.dataSave(pokemonDex);
			
		},
		onerror : function(x){
			console.log(x);
			alert("error pulling pokemon data, the error is: " + x.error);
		},
		timeout : 3000
	});
	
	xhr.open("GET", url);
	xhr.send();

};

exports.getData = getData;
