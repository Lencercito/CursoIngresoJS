/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	

	var importe;
	var resultado;
	importe= parseInt(importe);
	resultado= parseInt(resultado);
	importe= document.getElementById('importe').value;
	resultado= importe*0.75;
	resultado=document.getElementById('resultado').value=resultado;

	
}
