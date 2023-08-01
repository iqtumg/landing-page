// JavaScript para el botón de cerrar sesión
document.getElementById('logoutLink').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  
    // Aquí deberías agregar la lógica para cerrar sesión, como eliminar la sesión o el token de autenticación, etc.
    // Por ahora, simplemente redireccionaremos al usuario hacia la página de inicio de sesión.
    window.location.href = 'index.html'; // Reemplaza 'login.html' con la URL de tu página de inicio de sesión.
  });
  