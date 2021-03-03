
/*Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/

function mostrar()
{
	var productos; 
	var tipoProducto;
	var cantidad;
	var precio;
	var tipoInflamable;
	var marca;
	var respuesta;
	var contadorTipoAcohol;
	var contadorTipoIAC;
	var contadorQUAT;
	var promedioAlcohol;
	var promedioIAC;
	var promedioQUAT;
	var flagInflamable;
	var InflamableMaxCantidad;
	
	flagInflamable=0;
	contadorTipoAlcohol=0;
	contadorTipoIAC=0;
	contadorQUAT=0;

	do{
		productos=prompt("Cuál es el producto?");

		tipoProducto=prompt("Cuál es el tipo de producto? Acohol/IAC/QUAT");
		while(tipoProducto!="alcohol" || tipoProducto!="IAC" || tipoProducto!="QUAT"){
			alert("Eso no es un producto");
		}
		cantidad=prompt("Cual es la cantidad de productos que deseas llevar?");
		cantidad=parseInt(cantidad);
		while(cantidad<0 || cantidad>1000){
			cantidad=parseInt(cantidad);
			alert("Esa no es una cantidad correcta");
		}
		precio=prompt("Cuál es el precio?");
		precio=parseInt(precio);
		while(precio<100 || precio>300){
			precio=parseInt(precio);
			alert("Esa no es una cantidad correcta");
		}
		tipoInflamable=prompt("De que tipo inflamable es? Ignífugo/combustible/explosivo");
		while(tipoInflamable!="Ignifugo" || tipoInflamable!="combustible" || tipoInflamable!="explosivo"){
			alert("Ese no es un explosivo válido");
		}
		marca=prompt("Cuál es la marca?");
		while (isNan(marca)==fase) {
			alert("Eso no es un nombre de una empresa");
		}

		prompt("Deseas ingresar otro producto?")

		
	}while(respuesta=="si");

	switch (tipoProducto) {
		case "alcohol":
			if (cantidad>0 && 1000<cantidad) {
				contadorTipoAcohol++;
			}	
			break;
		case "IAC":
			if (cantidad>0 && 1000<cantidad) {
				var contadorTipoIAC;
			}
		case "QUAT":
			if (cantidad>0 && 1000<cantidad) {
				contadorQUAT++;
			}
			break;
	}
	//A
	promedioAlcohol=cantidad/contadorTipoAcohol;
	promedioIAC=cantidad/contadorTipoIAC;
	promedioQUAT=cantidad/contadorQUAT;

	if (flagInflamable==false || cantidadMaxtipoDeProductoIngresado>tipoDeProducto) {
		cantidadMaxtipoDeProductoIngresado=tipoDeProducto;	
	}
	
	switch (tipoProducto) {
		case "alcohol":
			if (cantidad>0 && 1000<cantidad) {
				contadorTipoAcohol++;
			}	
			break;
		case "IAC":
			if (cantidad>0 && 1000<cantidad) {
				var contadorTipoIAC;
			}
		case "QUAT":
			if (cantidad>0 && 1000<cantidad) {
				contadorQUAT++;
			}
			break;
	}


	alert("uno");
}



