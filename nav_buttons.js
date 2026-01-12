// filter buttons (nav-buttons)//
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".nav-buttons button");
    const cards = document.querySelectorAll(".box .card");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.textContent.toLowerCase();

            cards.forEach(card => {
                if (filter === "all" || card.classList.contains(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});