// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    const themeButton = document.getElementById('theme-toggle');

    // Toggle the 'dark-mode' class
    body.classList.toggle('dark-mode');

    // Update button text based on the current theme
    if (body.classList.contains('dark-mode')) {
        themeButton.textContent = 'Switch to Light Theme';
    } else {
        themeButton.textContent = 'Switch to Dark Theme';
    }
}
