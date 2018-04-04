
function format(data) {

	// let day = data.substring(0,2);
	// let month = data.substring(3,2);
	// let year = data.substring(7,2);

	return new Date(data).getTime();
}

app.filter("incidentesData", function() {
	return function(lista, dataInicio, dataFim) {
		// console.log(new Date(dataInicio).getTime(), new Date(dataFim).getTime());
		if (! angular.isDefined(dataInicio) || ! angular.isDefined(dataFim)) {
			
			return lista;
		}
		let lista_retorno = [];

		for (let i = 0; i < lista.length; i++) {
			let data = format(lista[i].data);
			
			if (data >= dataInicio.getTime() && data <= dataFim.getTime()) {
				lista_retorno.push(lista[i]);
			}
		}


		return lista_retorno;
	}
});
