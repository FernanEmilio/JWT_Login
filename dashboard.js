window.onload = function() {
    const token = localStorage.getItem('jwtToken');

    if (!token) {
        showError('No hay token disponible.');
        return;
    }

    fetch('http://localhost:3000/dashboard', {
        headers: {
            'Authorization': token
        }
    })
    .then(response => response.json())
    .then(data => {
        showSuccess(data.message);
    })
    .catch(error => {
        showError('Error al verificar el JWT.');
    });
}
