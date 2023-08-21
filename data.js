document.addEventListener("DOMContentLoaded", function() {
    const dataSpan = document.getElementById("data");
    const storedData = localStorage.getItem("storedData");

    if (storedData) {
        dataSpan.textContent = storedData;
    } else {
        dataSpan.textContent = "No hay datos almacenados";
    }
});