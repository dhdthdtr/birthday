document.getElementById("celebrateBtn").addEventListener("click", () => {
    const confettiContainer = document.getElementById("confetti");
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti-piece");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confettiContainer.appendChild(confetti);

        // Remove confetti after animation
        confetti.addEventListener("animationend", () => {
            confetti.remove();
        });
    }
});

function getRandomColor() {
    const colors = [
        "#ff6f61",
        "#6b5b95",
        "#88b04b",
        "#f7cac9",
        "#92a8d1",
        "#955251",
        "#b565a7",
        "#009b77",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}
