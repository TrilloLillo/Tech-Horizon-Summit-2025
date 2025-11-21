const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("email");
const resultado = document.getElementById("resultado");

// Event listener del formulario
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir recarga

  // Validación simple: campos no vacíos
  if (nombre.value.trim() === "" || email.value.trim() === "") {
    resultado.textContent = "por favor, llene todos los campos";
    resultado.style.color = "red";
    return;
  }

  // Si la validación es exitosa
  resultado.innerHTML = "Envío exitoso!";
  resultado.style.color = "green";
  // Limpiar campos
  form.reset();
});
