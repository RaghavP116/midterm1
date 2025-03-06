const arrows = document.querySelectorAll(".arrow");

arrows.forEach((arrow) => {
    const content = arrow.closest(".discovery-item").querySelector(".discovery-content");

    arrow.addEventListener("click", () => {
        if (content.style.display === "block") {
            content.style.display = "none";
            arrow.textContent = "▼"; 
        } else {
            content.style.display = "block";
            arrow.textContent = "▲"; 
        }
    });
});
