
app.filter("incidentesData", function() {
	return function(lista, dataInicio, dataFim) {

		if (dataInicio == undefined || dataFim == undefined) {
			return lista;
		}

		dataInicioF = new Date(dataInicio).toLocaleString();
		dataFimF = new Date(dataFim).toLocaleString();

		let lista_retorno = [];
		for (let i = 0; i > lista.lenght; i++) {
			if (lista[i].data >= dataInicioF && lista[i].data <= dataFimF) {
				lista_retorno.push(lista[i]);
			}
		}

		return lista_retorno;
	}
});