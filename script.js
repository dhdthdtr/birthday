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

// Image Upload Functionality
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');

// Load saved image on page load
window.addEventListener('load', () => {
    const savedImage = localStorage.getItem('uploadedImage');
    if (savedImage) {
        imagePreview.innerHTML = `<img src="${savedImage}" alt="Uploaded Image">`;
    }
});

// Function to handle image upload
imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = function(e) {
            // Hide the input box and display the image
            imageInput.style.display = 'none';  // Hide the input
            imagePreview.style.display = 'block';  // Show the image preview
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
        }
        
        reader.readAsDataURL(file);
    } else {
        imagePreview.innerHTML = '<p>Please select a valid image file.</p>';
    }
});

// Function to allow changing the image by clicking the preview image
imagePreview.addEventListener('click', () => {
    imageInput.style.display = 'block';  // Show the input again
    imagePreview.style.display = 'none';  // Hide the image preview
    imageInput.value = '';  // Reset the input value to allow selecting the same image again
});
