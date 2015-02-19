//Creamos un json con el listado de animales
var lista = {
	'aves' : new Array('Loro', 'Canario'),
	'mamiferos' : new Array('Perro', 'Caballo', 'Tigre'),
	'reptiles' : new Array('Cocodrilo', 'Tortuga', 'Iguana')
};

//Nos devuelveun codigo html con un formulario que dentro tendra un combo y un boton para enviar el form.
function dibujarCodigoHtml(grupo) {
	var html = '<DOCTYPE html>';
	html += '<html>';
    html += '<head>';
    html += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';
    html += '</head>';
    html += '<body>';
    html += '<form action="">';
    html += '<label> Seleccione el tipo de animal: </label>';
    html += '<select name="grupo"> ' + listaGrupos(grupo) + ' </select>';
    html += '<input type="submit" value="Listar" />';
    html += '</form>';
    html += listarAnimales(grupo);
    html += '</body>';
    html += '</html>';
    return html;
}

//Recibe como parametro el grupo actual y devuelve u listado con todos los grupos
function listaGrupos(grupo) {
	var html = '<option value=""> --- </option>';
	var selected;

	for (var item in lista) {
		selected = (item == grupo) ? 'selected="selected"' : '';
		html += '<option '+selected+' value="'+item+'"> ' + item + ' </option>';
	}
	return html;
}

//Recibe como parametro el grupo y busca los animales que hay en ese grupo
function listarAnimales(grupo) {
	var html = '';
	if (lista[grupo] != undefined) {
		html += '<ul>';
		for (var i in lista[grupo]) {
			html += '<li>' + lista[grupo][i] + '</li>';
		}
		html += '</ul>';
	}
	return html;
}
//Exportamos la fucion para que se llame desde el objeto al que se ha exportado el modulo
exports.dibujarCodigoHtml = dibujarCodigoHtml;