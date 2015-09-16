var dataRead = function () {
	console.log("show the data.");
	alert("read");
	var db = Ti.Database.open("pokemonDB");
	var rows = db.execute("SELECT name FROM pokemonTBL");
	var rc = rows.rowCount;
	if (rc > 0){
	while (rows.isValidRow()){
		var record = {
			pokemon : rows.fieldByName("name")
		};
		
		rows.next();
	};
	rows.close();
	db.close();
	var ui = require("ui");
	ui.buildUi(record);
	} else {
		alert("This app could not load any data. please check if it has network connection. Please enable in your Settings if it is not.");
	}
};

var dataSave = function (saveAr) {
	console.log("Save the data.");
	var db = Ti.Database.open("pokemonDB");
		db.execute("CREATE TABLE IF NOT EXISTS pokemonTBL (id INTEGER PRIMARY KEY, name TEXT)");

		db.execute("INSERT INTO pokemonTBL (name) VALUES (?)", saveAr.name);	

	db.close();
	console.log("this is" + JSON.stringify(saveAr));
	dataRead();
};

exports.dataRead = dataRead;
exports.dataSave = dataSave;