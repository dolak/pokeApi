var buildUi = function(pokeArr) {
	console.log("UI");

	var winData = Ti.UI.createWindow({
		backgroundColor : "#fff",
	});

	var data = Ti.UI.createTableView({
		headerTitle : "Pokemon",
		top : 20,
	});

	var sectionPoke = [];

	 var section = Ti.UI.createTableViewSection({
		 headerTitle : "pokemon"
	 });

	for (var i = 0; i < pokeArr.length; i++) {
		var row = Ti.UI.createTableViewRow({
			title : pokeArr[i].name
		});
		row.addEventListener("click", dataDetail);

		 section.add(row);
	};
	 sectionPoke.push(section);
	data.setData(sectionPoke);

	winData.add(data);
	winData.open();
};

var dataDetail = function() {
	var winDetail = Ti.UI.createWindow({
		backgroundColor : "#fff",
	});
	var detailText = Ti.UI.createLabel({
		text : this.type1,
		top : 30,
	});
	var detailDesc = Ti.UI.createLabel({
		text : this.type2,
		top : 120,
	});
	winDetail.add(detailText, detailDesc);

	winDetail.open();
	winDetail.addEventListener("click", function() {
		winDetail.close();
	});
};

exports.buildUi = buildUi;
