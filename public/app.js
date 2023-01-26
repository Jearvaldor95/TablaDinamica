let cont = 0;
let detalles = 0;
//agregar articulos a la tabla para pedidos
function listarporcodigo() {
	let codigo = $("input#buscarporcodigo").val();
	let nombre = $("input#buscarpornombre").val();
	let fila = "";
	let cantidad = 1;

	if (codigo != "" || nombre != "") {

		fila = '<tr class="filas" id="fila' + cont + '">' +
			'<td><input type="number" name="codigo" id="codigo" value="' + codigo + '"></td>' +
			'<td><input type="text" name="nombre" id="nombre" value="' + nombre + '"> </td>' +
			'<td><input type="number" name="cantidad" id="cantidad" onclick="calcularCantidad()" onkeyup="calcularCantidad()" value="' + cantidad + '"></td>' +
			'<td><button type="button" class="btn btn-danger" onclick="eliminarDetalle(' + cont + ')">X</button></td>' +
			'</tr>';
		cont++;
		detalles = detalles + 1;
		let
			$tbody = $('#detalles > tbody'),
			updated = false;

		// Recorremos los tr de la tabla para buscar coincidencias
		$tbody.find('tr').each(function (i, val) {

			// En este caso, el codigo se encuentra en la posición 0, o el nombre en la posición 1. Deberás adaptarlo a tu caso si fuera necesario.
			if ($(val).find('input')[0].value == codigo || $(val).find('input')[1].value == nombre) {

				// Igual que en el punto anterior, la cantidad se encuentra en la posición 2. Deberás adaptarlo en tu caso si fuera necesario.
				$(val).find('input')[2].value++;

				updated = true;
				return false;

			}

		});

		// La marca 'updated' indica si se actualizó la cantidad en el bucle anterior.
		// En caso de que no se actualizara, significa que no encontró el elemento por lo que lo añadimos.
		if (!updated)
			$tbody.append(fila);
                calcularCantidad();

	} else {
		alert("No hay datos");
	}
	
}

function limpiar(){
	$("#buscarporcodigo").val("");
	$("#buscarpornombre").val("");
}

function calcularCantidad() {
	let cant = document.getElementsByName("cantidad");
	let total = 0.0;
let subtotal =0;
	for (let i = 0; i < cant.length; i++) {
	       total += parseInt( document.getElementsByName("cantidad")[i].value);
               console.log(typeof total);
	}
	
        $("#cantidad_total").html(total);
}

function eliminarDetalle(indice) {
	$("#fila" + indice).remove();
	calcularCantidad();
	detalles = detalles - 1;
	//evaluar()
}
