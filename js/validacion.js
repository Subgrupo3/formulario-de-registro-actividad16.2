function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function confContraseña() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var terminos = document.getElementById("terminos"); // Asegúrate de obtener el elemento del checkbox correctamente

    if (terminos.checked) {
        if (password2 === password1 && password1.length >= 6) {
            showAlertSuccess();
        } else {
            showAlertError();
            event.preventDefault();
        }
    } else {
        showAlertError();
        event.preventDefault();
    }
}


  