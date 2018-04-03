
app.filter("dateFormat", function() {
	return function(data) {
		let format = new Date(data);
		
		let day = format.getDate();
		if (day < 10) {
			day = '0' + day;
		}

		let month = format.getMonth();
		if (day < 10) {
			month = '0' + month;
		}

		let year = format.getFullYear();
		return day + "/" + month + "/" + year;
	}
});