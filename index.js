<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Azure Function Server Date and Time</title>
    <style>
        #datetime {
          font-size: 24px;
            font-family: Calibri, sans-serif; /
            text-align: left; 
            margin-top: 50px;
        }
    </style>
</head>
<body>
    <div id="datetime"></div>
 
    <script>
        async function fetchServerDateTime() {
            try {
                const response = await fetch('https://functiontask0602.azurewebsites.net/api/HttpTrigger?code=-XGQBb6t4BQnJn9nyNtWcrkglfRv0h80-KjnoYMsXtGhAzFuj6SJOg==');
                const data = await response.json();
                return data.serverTime; 
            } catch (error) {
                console.error('Error fetching server date and time:', error);
                return 'Error fetching date and time';
            }
        }

        async function updateServerDateTime() {
            const serverTime = await fetchServerDateTime();
            document.getElementById('datetime').textContent = `Server Date and Time: ${serverTime}`;
        }
        
        updateServerDateTime();
 
        setInterval(updateServerDateTime, 1000);
    </script>
</body>
</html>
