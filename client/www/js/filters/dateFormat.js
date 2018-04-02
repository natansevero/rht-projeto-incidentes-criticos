
app.filter("dateFormat", function() {
	return function(data) {
		let format = new Date(data).toLocaleDateString();
		return format;
	}
});