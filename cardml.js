// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".img");

    cards.forEach(card => {
        const descriptionCard = card.querySelector(".description-card"); // Select the description card inside the clicked card
        
        card.addEventListener("click", () => {
            // Close any already open cards
            document.querySelectorAll(".img.active").forEach(activeCard => {
                if (activeCard !== card) {
                    activeCard.classList.remove("active");
                    const activeDescription = activeCard.querySelector(".description-card");
                    activeDescription.style.opacity = "0";
                    activeDescription.style.transform = "translateY(30px)";
                    activeDescription.style.bottom = "-120px";
                }
            });

            // Toggle the clicked card's description
            if (descriptionCard) {
                card.classList.toggle("active");

                // Control description card's animation
                if (card.classList.contains("active")) {
                    descriptionCard.style.opacity = "1";
                    descriptionCard.style.transform = "translateY(0)";
                    descriptionCard.style.bottom = "-20px"; // Reveal card smoothly
                } else {
                    descriptionCard.style.opacity = "0";
                    descriptionCard.style.transform = "translateY(30px)";
                    descriptionCard.style.bottom = "-120px"; // Hide the card again
                }
            }
        });
    });
});
