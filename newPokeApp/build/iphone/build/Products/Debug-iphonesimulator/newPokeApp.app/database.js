var dataRead = function() {
	//console.log("show the data.");
	var ui = require("ui");
	var db = Ti.Database.open("pokemonDB");
	var rows = db.execute("SELECT name, type1, type2, num, desc FROM pokemonTBL");
	var rc = rows.rowCount;

	if (rc > 0) {
		while (rows.isValidRow()) {
			var record = {
				name : rows.fieldByName("name"),
				type1 : rows.fieldByName("type1"),
				type2 : rows.fieldByName("type2"),
				desc : rows.fieldByName("desc"),
				num: rows.fieldByName("num")
			};

			ui.buildUi(record);
			rows.next();
			
		};
		rows.close();
		db.close();
	} else {
		alert("This app could not load any data. please check if it has network connection. Please enable in your Settings if it is not.");
	}
};

var dataSave = function(saveAr) {
	//console.log(saveAr);
	//console.log("Save the data.");
	var db = Ti.Database.open("pokemonDB");
	db.execute("CREATE TABLE IF NOT EXISTS pokemonTBL (id INTEGER PRIMARY KEY, name TEXT, type1 TEXT, type2 TEXT, num INT, desc TEXT)");
	db.execute("DELETE from pokemonTBL");
	db.execute("INSERT INTO pokemonTBL (name, type1, type2, num, desc) VALUES (?, ?, ?, ?, ?)", saveAr.dex.name, saveAr.dex.type1, saveAr.dex.type2, saveAr.dex.num, saveAr.desc);
	db.close();
	//console.log("this is" + JSON.stringify(saveAr));
	dataRead();
};

exports.dataRead = dataRead;
exports.dataSave = dataSave; 