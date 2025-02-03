// Get Elements
let yesButton = document.getElementById("yes-button");
let noButton = document.getElementById("no-button");
let mainScreen = document.getElementById("main-screen");
let successScreen = document.getElementById("success-screen");
let changingImage = document.getElementById("changing-image");

let noCount = 0;
const pleads = [
    "SAY YES", 
    "FYM NO????", 
    "Don't give me this attitude", 
    "CMONNNNNNNN", 
    "Pretty please?", 
    "UGHHH FLIP YOU",
    "I'll be very sad if you say no:(", 
    "IF YOU HATE ME JUST SAY SO", 
    "You hate me :("
];

const imagePaths = [
    "bunny4.webp",
    "bunny2.webp",
    "bunny3.webp",
    "kitty.webp",
    "kitty2.webp",
    "sadkitty.webp",
    "sadbunny.webp",
    "sadkitty2.webp"
];

// Store initial font size
let initialFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);

noButton.addEventListener("click", () => {
    noCount++;
    
    // Change the image each time "No" is clicked
    let newImageIndex = noCount % imagePaths.length;
    changingImage.src = imagePaths[newImageIndex];

    // Change the "No" button text
    noButton.textContent = noCount < pleads.length ? pleads[noCount - 1] : pleads[pleads.length - 1];

    // Increase "Yes" button size
    let newSize = initialFontSize * Math.pow(1.5, noCount);
    yesButton.style.fontSize = `${newSize}px`;

    // Shrink and move up after 7 clicks
    if (noCount >= 7) {
        changingImage.classList.add("shrink");
        document.querySelector("#main-screen h1").classList.add("shrink-text");
        noButton.classList.add("shrink-button");
        yesButton.classList.add("shrink-button");
    }
});


function createBackgroundHeart() {
    for (let i = 0; i < 1; i++) { // Create multiple hearts at once
        const heart = document.createElement("div");
        heart.classList.add("background-heart");
        heart.innerHTML = "❤️";

        // Random positioning anywhere on the screen
        const randomX = Math.random() * window.innerWidth; // Random left position
        const randomY = Math.random() * window.innerHeight; // Random starting position
        const randomSize = Math.random() * 2 + 1.5; // Size between 1.5rem and 3.5rem
        const randomDelay = Math.random() * 2; // Random delay to spread them out

        heart.style.left = `${randomX}px`;
        heart.style.top = `${randomY}px`; // Start at a random height
        heart.style.fontSize = `${randomSize}rem`;
        heart.style.animationDelay = `${randomDelay}s`;

        document.body.appendChild(heart);

        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, 7000); // Matches animation duration
    }
}

// Generate hearts every 300ms
setInterval(createBackgroundHeart, 300);

// Create hearts every 300ms for faster spawning
setInterval(createBackgroundHeart, 300);

// Generate hearts every 500ms instead of 1000ms
setInterval(createBackgroundHeart, 500);

yesButton.addEventListener("click", () => {
    // Trigger confetti with more particles
    confetti({
        particleCount: 100, // Increase the number of particles
        spread: 70, // Adjust the spread for a wider effect
        origin: { y: 0.6 } // Start from a higher position
    });

    // Delay showing the success screen to allow confetti to fall
    setTimeout(() => {
        // Hide the main screen
        mainScreen.style.display = "none";
        
        // Show the success screen
        successScreen.style.display = "flex";
    }, 0);
});
