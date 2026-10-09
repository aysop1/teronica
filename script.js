const searchForm = document.getElementById('court-search');
const locationInput = document.getElementById('location');
const searchMessage = document.getElementById('search-message');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = locationInput.value.trim();

    if (!location) {
        locationInput.focus();
        return;
    }

    searchMessage.textContent = `Court listings for ${location} are coming soon. In the meantime, explore the ways to play below.`;
    document.getElementById('discover').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('[data-focus-search]').forEach((link) => {
    link.addEventListener('click', () => {
        window.setTimeout(() => locationInput.focus(), 400);
    });
});