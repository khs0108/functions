document.addEventListener("DOMContentLoaded", () => {
    fetchServerTime();
});

async function fetchServerTime() {
    try {
        const response = await fetch('/api/getTime'); // Assuming your Azure Function is available at this endpoint
        const data = await response.json();
        const serverTime = data.time;
        const serverTimeElement = document.getElementById('server-time');
        serverTimeElement.textContent = `Server time is: ${serverTime}`;
    } catch (error) {
        console.error('Error fetching server time:', error);
    }
}
