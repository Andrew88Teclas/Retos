function validaesVacio(dato) {
    return !dato.trim().length;
}

/**
 * Al ingresar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
function validar() {
    //obtiene valores
    let name = $("#name").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let age = $("#age").val();
    let errores = "";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if (validaesVacio(name)) {
        errores = "Debe ingresar el nombre del cliente<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#name").focus();
        return false;
    } else if (validaesVacio(email)) {
        errores = "Debe ingresar el correo electrónico del cliente<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#email").focus();
        return false;
    } else if (!ValidateEmail(email)) {
        errores = "Debe ingresar un correo electrónico valido<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#email").focus();
        return false;
    } else if (validaesVacio(password)) {
        errores = "Debe ingresar la contraseña para el cliente<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#password").focus();
        return false;
    } else if (validaesVacio(age)) {
        errores = "Debe ingresar la edad del cliente<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#age").focus();
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
function validarEditar() {
    //obtiene valores
    let name = $("#nameEdit").val();
    let email = $("#emailEdit").val();
    let password = $("#passwordEdit").val();
    let age = $("#ageEdit").val();
    let errores = "";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if (validaesVacio(name)) {
        errores = "name vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#nameEdit").focus();
        return false;
    } else if (validaesVacio(email)) {
        errores = "email vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#emailEdit").focus();
        return false;
    } else if (validaesVacio(password)) {
        errores = "password vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#passwordEdit").focus();
        return false;
    } else if (validaesVacio(age)) {
        errores = "age vacio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#ageEdit").focus();
        return false;
    } else {
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

/**
 * valida el correo electrónico: tomado de
 * https://www.w3resource.com/javascript/form/email-validation.php
 */
function ValidateEmail(valor) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return valor.match(mailformat);
}