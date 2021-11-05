function mostrarEliminar(idMensaje,messageText){
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").hide();
    $("#nuevoRegistro").hide();
    $("#titleIdDelete").html("Desea eliminar el mensaje con el id: " + idMensaje + "?...");    
    $("#idDelete").val(idMensaje);
    $("#messagetextDelete").html("Texto del mensaje: " + messageText);
    $("#eliminar").show(1000);
}

/*
    Esta función recibe como parametro el id del registro a eliminar,
    ejecuta la petición asincrona al servidor de Oracle enviando dentro de los datos 
    de la petición registro a eliminar. El tipo de petición es DELETE
*/
function borrarRegistro(llaveRegistro) {

    //crea un objeto javascript
    let datos = {
        idMessage: llaveRegistro
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://152.70.216.53:8081/api/Message/" + llaveRegistro,

        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
        data: datosPeticion,

        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'DELETE',

        contentType: "application/JSON",

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
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
            $("#mensajes").hide(1000);
        }
    });
}