// Ejercicio con arrays

/* var numero = [1,2,3,4,5,6,7,8,9,10]
var i;
var n = [];

for (i=0; i<=numero.length; i++) {
	if (numero[i]%2===0){
		numero[i];
		n.push(numero[i]);
	}
}
console.log(n.reverse()); */

// Ejercicio Calculando DNI

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numDni = parseInt(prompt("Ingrese su DNI"));
var letra = prompt("Ingrese una letra");
letra = letra.toUpperCase();

function DNI(){
	if (numDni <= 0 || numDni >= 99999999) {
	alert("El numero ingresado no es valido");
	}
	else {
		var operacion = letras[numDni % 23];
		if (operacion != letra){
			alert("La letra ingresada es incorrecta");
		}
		else {
			alert("El DNI ingresado es correcto")
		}
	}
	return operacion;
}
operacion = DNI();

// Añadir elementos a un array con push
