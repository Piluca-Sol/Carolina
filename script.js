
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('juego-form');
    const input = document.getElementById('juego-input');
    const respuesta = document.getElementById('respuesta');
  
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const juego = input.value.trim();
        if (juego) {
          respuesta.textContent = `¡Gracias! Pronto compartiremos más sobre "${juego}".`;
        } else {
          respuesta.textContent = 'Por favor, escribe un nombre de juego.';
        }
        input.value = '';
      });
    }
  });
  // Manejador del formulario de registro
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registro-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("✅ Registro exitoso. ¡Bienvenido a la comunidad gamer!");
      });
    }
  
    const contacto = document.getElementById("form-contacto");
    if (contacto) {
      contacto.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("📩 Tu mensaje ha sido enviado.");
      });
    }
  });