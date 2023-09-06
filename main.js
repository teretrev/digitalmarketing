// Función para resaltar el enlace activo en el menú de navegación
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    links.forEach((link) => {
        link.addEventListener("click", function () {
            links.forEach((otherLink) => {
                otherLink.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});
