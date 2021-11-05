function validaesVacio(dato){
    return !dato.trim().length;
}

/**
 * Al ingresar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
function validar(){
    //obtiene valores
    let id = $("#id").val();
    let messagetext = $("#messagetext").val();
    let client = $("#client").val();
    let costume = $("#costume").val();
    let errores = "";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if (validaesVacio(client)) {
        errores = "Debe seleccionar un cliente<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#client").focus();
        return false;
    } else if (validaesVacio(costume)) {
        errores = "Debe seleccionar una disfraz<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#costume").focus();
        return false;
    } else if (validaesVacio(messagetext)) {
        errores = "Debe ingresar el texto del mensaje<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#messagetext").focus();
        return false;
    } else {
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

/**
 * Al actualizar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
 function validarEditar(){
    //obtiene valores
    let id = $("#idEdit").val();
    let messagetext = $("#messagetextEdit").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(id)) {
        errores="id vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#idEdit").focus();
        return false;
    }else if( validaesVacio(messagetext)) {
        errores="messagetext vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#nameEdit").focus();
        return false;
    }else{
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

function upperCaseF(campo) {
    setTimeout(function () {
        campo.value = campo.value.toUpperCase();
    }, 1);
}