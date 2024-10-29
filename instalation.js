// Simulación de instalación
window.onload = function() {
    if (!localStorage.getItem('isInstalled')) {
        document.getElementById('installationScreen').style.display = 'flex';
    }
};

function installSystem() {
    localStorage.setItem('isInstalled', true);
    document.getElementById('installationScreen').style.display = 'none';
}
