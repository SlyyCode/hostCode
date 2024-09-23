const toggleThemeButton = document.getElementById('toggleTheme');
const body = document.body;
toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    toggleThemeButton.textContent = body.classList.contains('dark-mode') ? 'Light mode' : 'Dark mode';
});