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
    let brand = $("#brand").val();
    let year = $("#year").val();
    let category = $("#category").val();
    let description = $("#description").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(name)) {
        errores="Debe ingresar el nombre<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#name").focus();
        return false;
    }else if( validaesVacio(brand)) {
        errores="Debe ingresar la marca<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#brand").focus();
        return false;
    }else if( validaesVacio(year)) {  
        errores="Debe ingresar el año<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#year").focus();
        return false;
    }else if( validaesVacio(category)) { 
        errores="Debe seleccionar la categoría<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#category").focus();
        return false;
    }else if( validaesVacio(description)) { 
        errores="Debe ingresar la descripción<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#description").focus();
        return false;
    }
    else{
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
    let name = $("#nameEdit").val();
    let brand = $("#brandEdit").val();
    let year = $("#yearEdit").val();
    let description = $("#descriptionEdit").val();
    let errores="";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if( validaesVacio(name)) {
        errores="Debe ingresar el nombre<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#nameEdit").focus();
        return false;
    }else if( validaesVacio(brand)) {
        errores="Debe ingresar la marca<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#brandEdit").focus();
        return false;
    }else if( validaesVacio(year)) {  
        errores="Debe ingresar el año<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#yearEdit").focus();
        return false;
    }else if( validaesVacio(description)) { 
        errores="Debe ingresar la descripción<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#descriptionEdit").focus();
        return false;
    }
    else{
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