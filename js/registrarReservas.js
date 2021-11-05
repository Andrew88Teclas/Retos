//Esta función ejecuta la petición asincrona al servidor de Oracle, envia una
//petición al ws de tipo POST
function registrar() {

    //crea un objeto javascript
    let datos={
        startDate :$("#startDate").val(),
        devolutionDate :$("#devolutionDate").val(),
        client:{"idClient":$("#client").val()},
        costume:{"id":$("#costume").val()}
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    if (validar()){
        $.ajax({
            // la URL para la petición (url: "url al recurso o endpoint")
            //url: "http://152.70.216.53:8081/api/Reservation/save",
            url: "http://152.70.216.53:8081/api/Reservation/save",

            // la información a enviar
            // (también es posible utilizar una cadena de datos)
            //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
            data : datosPeticion,
    
            // especifica el tipo de petición http: POST, GET, PUT, DELETE
            type: 'POST',
    
            contentType:"application/JSON",
    
            // el tipo de información que se espera de respuesta
            //dataType: 'json',
    
            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success: function (respuesta) {
                //escribe en la consola del desarrollador para efectos de depuración
                console.log(respuesta);
                $("#mensajes").show(1000);
                $("#mensajes").html("Registro ingresado...");
                $("#mensajes").hide(1000);
                listar();
                estadoInicial();
            },
    
            // código a ejecutar si la petición falla;
            // son pasados como argumentos a la función
            // el objeto de la petición en crudo y código de estatus de la petición
            error: function (xhr, status) {
                $("#mensajes").show(1000);
                $("#mensajes").html("Error peticion POST..." + status );
                //$("#mensajes").hide(1000);
            }
        });
    }
}

/**
 * Configura el aspecto de la página para ingresar un nuevo registro
 */
function activaNuevo(){
    $("#nuevo").show(500);
    $("#startDate").focus();
    $("#editar").hide();
    $("#nuevoRegistro").hide(500)
    $("#listado").hide(500);
    listarClientes();
    listarBotes();
}