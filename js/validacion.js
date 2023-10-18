function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

function confContraseña() {
  var password1 = document.getElementById("password1").value;
  var password2 = document.getElementById("password2").value;
  var terminos = document.getElementById("terminos"); 

  if (terminos.checked) {
    if (password2 === password1 && password1.length >= 6) {
      showAlertSuccess();
      document.getElementById("terminosText").classList.add("text-success");
    } else {
      showAlertError();
      return false
    }
  } else {
    showAlertError();
    document.getElementById("terminosText").classList.remove("text-success");
    return false
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById('passwordForm');
  let email = document.getElementById('email');
  let password1 = document.getElementById('password1');
  let password2 = document.getElementById('password2');
  let terminos = document.getElementById('terminos');
  let nombre = document.getElementById('nombre');
  let apellido = document.getElementById('apellido');

  form.addEventListener("submit", function(event) {
    let valid = true;

    if (!email.value || !email.validity.valid) {
      valid = false;
      email.classList.add('is-invalid');
    } else {
      email.classList.remove('is-invalid');
    }

    if (!nombre.value) {
      valid = false;
      nombre.classList.add('is-invalid');
    } else {
      nombre.classList.remove('is-invalid');
    }

    if (!apellido.value) {
      valid = false;
      apellido.classList.add('is-invalid');
    } else {
      apellido.classList.remove('is-invalid');
    }

    if (!password1.value || password1.value.length < 6) {
      valid = false;
      password1.classList.add('is-invalid');
    } else {
      password1.classList.remove('is-invalid');
    }

    if (!password2.value || password1.value !== password2.value || password2.value.length < 6) {
      valid = false;
      password2.classList.add('is-invalid');
    } else {
      password2.classList.remove('is-invalid');
    }

    if (!terminos.checked) {
      valid = false;
      terminos.classList.add('is-invalid');
    } else {
      terminos.classList.remove('is-invalid');
    }

    if (!valid) {
      
      document.getElementById('alert-danger').classList.add('show');
      
    } else {
      document.getElementById('alert-success').classList.add('show');
    }
    event.preventDefault();
   
  });

  function applyValidationStyles(inputElement) {
    if (inputElement.value) {
      inputElement.classList.remove('is-invalid');
      inputElement.classList.add('is-valid');
    } else {
      inputElement.classList.add('is-invalid');
      inputElement.classList.remove('is-valid');
    }
  }

  email.addEventListener("input", function() {
    applyValidationStyles(email);
  });

  nombre.addEventListener("input", function() {
    applyValidationStyles(nombre);
  });

  apellido.addEventListener("input", function() {
    applyValidationStyles(apellido);
  });

  password1.addEventListener("input", function() {
    applyValidationStyles(password1);
  });

  password2.addEventListener("input", function() {
    applyValidationStyles(password2);
  });

  terminos.addEventListener("change", function() {
    if (terminos.checked) {
      terminos.classList.remove('is-invalid');
      terminos.classList.add('is-valid');
      terminosText.classList.add("text-success");
    } else {
      terminos.classList.add('is-invalid');
      terminos.classList.remove('is-valid');
      document.getElementById("terminosText").classList.remove("text-success");
    }
  });
});
