// Guardar notas
function saveNotes() {
    const notes = document.querySelector("#app2 textarea").value;
    localStorage.setItem("userNotes", notes);
}

// Cargar notas
function loadNotes() {
    document.querySelector("#app2 textarea").value = localStorage.getItem("userNotes") || "";
}

window.onload = loadNotes;
