document.addEventListener("DOMContentLoaded", function() {
// Selecciona el formulario por su id "formRegistro"
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  let obligatorios = document.getElementsByClassName("form-control");

  for (let i = 0; i < obligatorios.length; i++) {
    if (obligatorios[i].value === "") {
      obligatorios[i].classList.add("is-invalid"); // Cambia la clase para aplicar el estilo de validación
      event.preventDefault(); // Evita que se envíe el formulario
    }
    else{
        obligatorios[i].classList.remove("is-invalid");
    }
  }
   const inputFields = document.getElementsByClassName("form-control");

   for (let i = 0; i < inputFields.length; i++) {
     inputFields[i].addEventListener("input", function (event) {
       if (inputFields[i].value === "") {
         inputFields[i].classList.add("is-invalid"); // Agrega la clase de validación
       } else {
         inputFields[i].classList.remove("is-invalid"); // Elimina la clase de validación
       }
     });
   }

    const contrasenia = document.getElementById("password1");
    const psw2 = document.getElementById("password2");
    
    if (contrasenia.value != psw2.value) {
        psw2.classList.add("is-invalid");
    } else {
        psw2.classList.remove("is-invalid"); // Elimina la clase de validación
      
    }

    var terminos = document.getElementById('terminos');
    var tituloTerminos = document.getElementById("terminosTitulo");

    if(!(terminos.checked)){
        terminos.classList.add("is-invalid");
        tituloTerminos.classList.add("is-invalid");
        tituloTerminos.classList.add("text-danger");
    } else{
        terminos.classList.remove("is-invalid");
        tituloTerminos.classList.remove("is-invalid");
        tituloTerminos.classList.remove("text-danger");
        terminos.classList.add("text-success");
    }

});

var terminos = document.getElementById('terminos');
terminos.addEventListener("change", function(){
    if(!(terminos.checked)){
        terminos.classList.add("is-invalid");
        tituloTerminos.classList.add("is-invalid");
        tituloTerminos.classList.add("text-danger");
    } else{
        terminos.classList.remove("is-invalid");
        tituloTerminos.classList.remove("is-invalid");
        tituloTerminos.classList.remove("text-danger");
        terminos.classList.add("text-success");
    }
})

const email = document.getElementById("email");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", function (event) {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.

  if (email.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    emailError.innerHTML = ""; // Restablece el contenido del mensaje
    emailError.className = "error"; // Restablece el estado visual del mensaje
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError();
  }
  if (!email.validity.valid) {
   showError();
    // Eevitamos que se envíe el formulario cancelando el evento
    event.preventDefault();
  }

});

const contrasenia = document.getElementById("password1");
  const contraseniaError = document.querySelector("#password1 + span.error");

  if (contrasenia.validity.tooShort) {
    // Si los datos son demasiado cortos
    // muestra el mensaje de error siguiente.
    contraseniaError.textContent =
      "La contaseña debe tener al menos ${contrasenia.minLength} caracteres; ha introducido ${contrasenia.value.length }.";
  }

function showError() {
    if (email.validity.valueMissing) {
      // Si el campo está vacío
      // muestra el mensaje de error siguiente.
      emailError.textContent =
        "Debe introducir una dirección de correo electrónico.";
    } else if (email.validity.typeMismatch) {
      // Si el campo no contiene una dirección de correo electrónico
      // muestra el mensaje de error siguiente.
      emailError.textContent =
        "El valor introducido debe ser una dirección de correo electrónico.";
    } else if (email.validity.tooShort) {
      // Si los datos son demasiado cortos
      // muestra el mensaje de error siguiente.
      emailError.textContent =
        "El correo electrónico debe tener al menos ${ email.minLength } caracteres; ha introducido ${ email.value.length }.";
    }
}  

})