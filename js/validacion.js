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

document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById('passwordForm');
  
    let email = document.getElementById('email');
    let password1 = document.getElementById('password1');
    let password2 = document.getElementById('password2');
    let terminos = document.getElementById('terminos');
  
    form.addEventListener("submit", function(event) {
      let valid = true;
  
      if (!email.value || !email.validity.valid) {
        valid = false;
        email.classList.add('is-invalid');
      } else {
        email.classList.remove('is-invalid');
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
        event.preventDefault(); // prevent form from submitting
        document.getElementById('alert-danger').classList.add('show');
      } else {
        document.getElementById('alert-success').classList.add('show');
      }
    });
  
    email.addEventListener("input", function() {
      if (email.validity.valid) {
        email.classList.remove('is-invalid');
      } else {
        email.classList.add('is-invalid');
      }
    });
  
    password1.addEventListener("input", function() {
      if (password1.value.length >= 6) {
        password1.classList.remove('is-invalid');
      } else {
        password1.classList.add('is-invalid');
      }
  
      if (password2.value !== password1.value || !password1.validity.valid) {
        password2.classList.add('is-invalid');
      } else {
        password2.classList.remove('is-invalid');
      }
    });
  
    password2.addEventListener("input", function() {
      if (password1.value === password2.value && password2.value.length >= 6) {
        password2.classList.remove('is-invalid');
      } else {
        password2.classList.add('is-invalid');
      }
    });
  
    terminos.addEventListener("change", function() {
      if (terminos.checked) {
        terminos.classList.remove('is-invalid');
      } else {
        terminos.classList.add('is-invalid');
      }
    });
  
  });
  

  