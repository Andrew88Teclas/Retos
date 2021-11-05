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
    let name = $("#name").val();
    let description = $("#description").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(name)) {
        errores="Debe ingresar el nombre de la categoría<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#name").focus();
        return false;
    }else if( validaesVacio(description)) {
        errores="Debe ingresar la descripción de la categoría<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#description").focus();
        return false;
    }else{
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
    let name = $("#nameEdit").val();
    let description = $("#descriptionEdit").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(name)) {
        errores="Debe ingresar el nombre de la categoría<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#nameEdit").focus();
        return false;
    }else if( validaesVacio(description)) { 
        errores="Debe ingresar la descripción de la categoría<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#descriptionEdit").focus();
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