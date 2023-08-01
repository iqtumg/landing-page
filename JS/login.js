// JavaScript para manejar el envío del formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario
  
    // Aquí deberías agregar la lógica de autenticación.
    // Por ahora, utilizaremos credenciales de ejemplo para simular el inicio de sesión.
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Verifica las credenciales de ejemplo (estas deben coincidir con lo que hayas definido en el servidor)
    if (username === 'admin' && password === 'admin') {
      // Si las credenciales son correctas, redirige al usuario a la página de inicio (home)
      window.location.href = 'index.html'; // Reemplaza 'home.html' con la URL de tu página de inicio
    } else {
      // Si las credenciales son incorrectas, muestra un mensaje de error (puedes personalizarlo)
      alert('Credenciales incorrectas. Por favor, inténtalo nuevamente.');
    }
  });
  