/**
 *  COnfigura la interfaz gráfica para presentar la secciòn de confirmar
 * elimanción de registro
 * @param {*} idCategoria codigo de la categoria
 * @param {*} infCategoria informacion adicional de la categoria
 */
 function mostrarEliminar(idCategoria,infCategoria){
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").hide();
    $("#nuevoRegistro").hide();
    $("#titleIdDelete").html("Desea eliminar la categoria con el id: " + idCategoria + " ?...");    
    $("#idDelete").val(idCategoria);
    $("#categoryDelete").html(infCategoria);
    $("#eliminar").show(1000);
}

/*
    Esta función recibe como parametro el id del registro a eliminar,
    ejecuta la petición asincrona al servidor de Oracle enviando dentro de los datos 
    de la petición registro a eliminar. El tipo de petición es DELETE
*/
function borrarRegistro(llaveRegistro) {
    //crea un objeto javascript
    let datos={
        id: llaveRegistro
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://152.70.216.53:8081/api/Category/" + llaveRegistro,

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
        data : datosPeticion,

        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'DELETE',

        contentType:"application/JSON",

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            console.log(respuesta);
            $("#mensajes").show(1000);
            $("#mensajes").html("Registro eliminado...");
            $("#mensajes").hide(1000);
            listar();
            estadoInicial();
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            $("#mensajes").html("La Categoria que intenta eliminar tiene información relacionada, por favor verifique...");
            $("#mensajes").show(1000);
        }
    });
}