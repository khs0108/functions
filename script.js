document.addEventListener('DOMContentLoaded', function () {
    fetchServerTime();
});

function fetchServerTime() {
    fetch('https://functiontask0602.azurewebsites.net/api/HttpTrigger?code=-XGQBb6t4BQnJn9nyNtWcrkglfRv0h80-KjnoYMsXtGhAzFuj6SJOg==')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const serverTime = data.serverTime; // Assuming the server returns an object with a key 'serverTime'
        displayServerTime(serverTime);
    })
    .catch(error => {
        console.error('There was a problem fetching the server time:', error);
    });
}

function displayServerTime(serverTime) {
    const serverTimeElement = document.getElementById('serverTime');
    serverTimeElement.textContent = serverTime;
}
