// Theme toggle
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');

    // Change button icon
    if (body.classList.contains('dark')) {
        toggleButton.textContent = "🌙"; // Moon for dark mode
    } else {
        toggleButton.textContent = "☀"; // Sun for light mode
    }
});