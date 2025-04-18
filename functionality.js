document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".project_name");
    
    const arr = ["What's To Be Done ?", "Hello Human, Get Your Things Done", "What's Up ?", "How Can I Help You ?", "Make Your Wish !"];
    const min = 0;
    const max = arr.length - 1;
    const text = arr[Math.floor(Math.random() * (max - min + 1)) + min];
    let index = 0; // Initialize index for typing effect

    function typeEffect() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Adjust typing speed (100ms per character)
        }
    }

    textElement.textContent = ""; // Clear initial text
    typeEffect();
});