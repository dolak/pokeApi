var getData = function() {
	console.log("getData");
	// I need to iterate the url to get different pokemon pages
	var url = [];

	for (var i = 1; i < 10; i++) {
		var urlD = "http://pokeapi.co/api/v1/pokemon/" + i + "/";
		//console.log(urlD);
		url.push(urlD);
	};
	var request = function(url) {
		console.log(url);
		var pokemonArr = [];
		for (var i = 0; i < url.length; i++) {
			var xhr = Ti.Network.createHTTPClient({
				onload : function(x) {
					console.log(x);
					console.log(this.responseText);
					var json = JSON.parse(this.responseText);

					if (json.types.length > 1) {
						var pokemonDex = {
							name : json.name,
							type1 : json.types[0].name,
							type2 : json.types[1].name
							
						};
						pokemonArr.push(pokemonDex);
					} else {
						var pokemonDex = {
							name : json.name,
							type1 : json.types[0].name
						};
						pokemonArr.push(pokemonDex);
					}
					console.log(pokemonArr);
					var save = require("database");
					save.dataSave(pokemonArr);

				},
				onerror : function(x) {
					console.log(x);
					alert("error pulling pokemon data, the error is: " + x.error);
				},
				timeout : 3000

			});

			//pokemonArr.push(pokemonDex);

			xhr.open("GET", url[i]);
			xhr.send();
		}
	};
	request(url);
};

exports.getData = getData;
