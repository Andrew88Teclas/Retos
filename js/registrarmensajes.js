//Esta función ejecuta la petición asincrona al servidor de Oracle, envia una
//petición al ws de tipo POST
function registrar() {

    //crea un objeto javascript
    let datos={
        messageText: $("#messagetext").val(),
        client:{"idClient":$("#client").val()},
        costume:{"id":$("#costume").val()}
    }

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    let datosPeticion = JSON.stringify(datos);

    if (validar()){
        $.ajax({
            // la URL para la petición (url: "url al recurso o endpoint")
            url: "http://152.70.216.53:8081/api/Message/save",
            //url: "http://152.70.216.53:8081/api/Message/save",
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
    $("#client").focus();
    $("#editar").hide();
    $("#nuevoRegistro").hide(500)
    $("#listado").hide(500);
    listarClientes();
    listarDisfraces();
}

function armaListaClientes(items) {
    $("#listado").html("");
    $("#listado").show(500);
    //define variable javascript con la definicion inicial de la tabla, la primera fila y los
    //encabezados o títulos de la tabla
    var lista = ` <option value="">--Selecciona un Cliente--</option>`;
                  
    //recorre el arreglo de 'items' y construye dinamicamente la fila de datos de la tabla
    for (var i=0; i < items.length; i++) {
        lista +=`<option value="${items[i].idClient}">${items[i].name}</option>`;
    }

    //accede al elemento con id 'listado' y adiciona la tabla de datos a su html
    $("#client").html(lista);
}

function listarClientes() {
    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://152.70.216.53:8081/api/Client/all",
        //url: "http://152.70.216.53:8081/api/Client/all",
        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
        //data : { id : 1, ...},

        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            //console.log(respuesta);

            //recibe el arreglo 'items' de la respuesta a la petición
            armaListaClientes(respuesta);
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
            //$("#mensajes").hide(1000);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            $("#mensajes").html("Obteniendo listado de bicis...");
            $("#mensajes").hide(1000);
        }
    });
}


function armaListadisfraces(items) {
    $("#listado").html("");
    $("#listado").show(500);
    //define variable javascript con la definicion inicial de la tabla, la primera fila y los
    //encabezados o títulos de la tabla
    var lista = ` <option value="">--Selecciona una disfraz--</option>`;
                  
    //recorre el arreglo de 'items' y construye dinamicamente la fila de datos de la tabla
    for (var i=0; i < items.length; i++) {
        lista +=`<option value="${items[i].id}">${items[i].name}</option>`;
    }

    //accede al elemento con id 'listado' y adiciona la tabla de datos a su html
    $("#costume").html(lista);
}

function listarDisfraces() {
    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "http://152.70.216.53:8081/api/Costume/all",
        //url: "http://152.70.216.53:8081/api/Costume/all",
        // la información a enviar
        // (también es posible utilizar una cadena de datos)
        //si el metodo del servicio recibe datos, es necesario definir el parametro adicional
        //data : { id : 1, ...},

        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            //console.log(respuesta);

            //recibe el arreglo 'items' de la respuesta a la petición
            armaListadisfraces(respuesta);
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
            //$("#mensajes").hide(1000);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            $("#mensajes").html("Obteniendo listado de bicis...");
            $("#mensajes").hide(1000);
        }
    });
}

function mostrarmensaje(){
    alert("Opción no impplementada hasta el reto 4...")
}