/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numerouno;
	var numerodos;

	numerouno= document.getElementById('numeroUno').value;
	numerodos= document.getElementById('numeroDos').value;
	numerouno= parseInt(numerouno);
	numerodos= parseInt(numerodos);
	alert(numerouno+numerodos);

}

function restar()
{
	var numerouno;
	var numerodos;
	var	resultado;
	numerouno= parseInt(numerouno);
	numerodos= parseInt(numerodos);
	numerouno= document.getElementById('numeroUno').value;
	numerodos= document.getElementById('numeroDos').value;
	resultado= numerouno-numerodos;
	alert(numerouno-numerodos);
}

function multiplicar()
{ 
	var numerouno;
	var numerodos;
	var resultado;
	numerouno= parseInt(numerouno);
	numerodos= parseInt(numerodos);
	numerouno= document.getElementById('numeroUno').value;
	numerodos= document.getElementById('numeroDos').value;
	resultado= numerouno*numerodos;
	alert(resultado);

}

function dividir()
{
	
		var numerouno;
	var numerodos;
	var resultado;
	numerouno= parseInt(numerouno);
	numerodos= parseInt(numerodos);
	numerouno= document.getElementById('numeroUno').value;
	numerodos= document.getElementById('numeroDos').value;
	resultado= numerouno/numerodos;
	alert("El resultadode la division es "+resultado);
}

