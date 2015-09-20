//var getData = function() {
	//console.log("getData");

	var newRequest = function(dex) {
		//console.log("DEX !!!!" + dex);
		var save = require("database");
		var xhr = Ti.Network.createHTTPClient({
			onload : function(x) {
				// console.log(x);
				// console.log(this.responseText);
				var json = JSON.parse(this.responseText);

				var pokemonDesc = {
					dex: dex,
					desc: json.description
				};
				save.dataSave(pokemonDesc);
				// console.log(pokemonDesc);
			},
			onerror : function(x) {
				// console.log(x);
				alert("error pulling pokemon data, the error is: " + x.error);
			},
			timeout : 3000

		});

		xhr.open("GET", dex.desc);
		xhr.send();
	};

	var request = function(url) {
		var save = require("database");
		var xhr = Ti.Network.createHTTPClient({
			onload : function(x) {
				// console.log(x);
				// console.log(this.responseText);
				var json = JSON.parse(this.responseText);

				if (json.types.length > 1) {
					var pokemonDex = {
						desc : "http://pokeapi.co" + json.descriptions[0].resource_uri,
						name : json.name,
						type1 : json.types[0].name,
						type2 : json.types[1].name,
						num : json.national_id
					};
					newRequest(pokemonDex);
				} else {
					var pokemonDex = {
						desc : "http://pokeapi.co" + json.descriptions[0].resource_uri,
						name : json.name,
						type1 : json.types[0].name,
						num : json.national_id
					};
					newRequest(pokemonDex);
				}

			},
			onerror : function(x) {
				// console.log(x);
				alert("error pulling pokemon data, the error is: " + x.error);
			},
			timeout : 3000

		});

		xhr.open("GET", url);
		xhr.send();
	};


	var getUrl = function() {
		for (var i = 0; i < 10; i++) {
			var urlD = "http://pokeapi.co/api/v1/pokemon/" + i + "/";
			request(urlD);
		};
	};
	
	exports.getUrl = getUrl;

//};
//exports.getData = getData;
