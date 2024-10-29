function openApp(appId) {
    document.getElementById(appId).style.display = 'flex';
}

function closeApp(appId) {
    document.getElementById(appId).style.display = 'none';
}

function toggleStartMenu() {
    const startMenu = document.getElementById("startMenu");
    startMenu.style.display = startMenu.style.display === "none" ? "block" : "none";
}

// Reloj en la barra de tareas
function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);

// Funcionalidad de arrastrar para ventanas
let isDragging = false;
let offsetX, offsetY;

document.querySelectorAll('.window').forEach(window => {
    const titleBar = window.querySelector('.title-bar');
    titleBar.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.offsetX;
        offsetY = e.offsetY;
        window.style.position = 'absolute';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            window.style.left = `${e.pageX - offsetX}px`;
            window.style.top = `${e.pageY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});
