function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${type}`;
    alertDiv.textContent = message;

    document.body.appendChild(alertDiv);

    setTimeout(() => {
        document.body.removeChild(alertDiv);
    }, 3000);
}

function showSuccess(message) {
    console.log(message);
    showAlert(message, 'success');
}

function showError(message) {
    console.log(message);
    showAlert(message, 'error');
}
