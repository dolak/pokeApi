var winData = Ti.UI.createWindow({
	backgroundColor : "#fff",
});

var data = Ti.UI.createTableView({
	headerTitle : "Pokemon",
	top : 20,
});


var buildUi = function(pokeArr) {
	// console.log("UI");
	something = pokeArr.num;
	var row = Ti.UI.createTableViewRow({
		title : "#" + pokeArr.num + "  " + pokeArr.name
	});
	data.appendRow(row);
	row.addEventListener("click", dataDetail);
	//console.log(pokeArr);

	winData.add(data);
	winData.open();
	//something.push(pokeArr);
	// console.log("something");
	//console.log(something);
	// console.log("something");
	//dataDetail(this);
};

var dataDetail = function(pokeArr) {
	console.log(this);
	var winDetail = Ti.UI.createWindow({
		backgroundColor : "#ececec",
	});
	var type1Label = Ti.UI.createLabel({
		text : this.type1,
		top : 30,
	});
	var type2Label = Ti.UI.createLabel({
		text : this.type2,
		top : 120,
	});
	var desc = Ti.UI.createLabel({
		text : this.desc,
		top : 160
	});

	winDetail.add(type1Label, type2Label, desc);

	winDetail.open();
	winDetail.addEventListener("click", function() {
		winDetail.close();
	});
 console.log(pokeArr);
};

exports.buildUi = buildUi;

