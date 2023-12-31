<!DOCTYPE html>
<html>
<head>
    <title>Data Fetching Example</title>
</head>
<body>
    <button id="fetchDataButton1">Fetch Data for Date 1</button>
    <button id="fetchDataButton2">Fetch Data for Date 2</button>
    <button id="fetchDataButton3">Fetch Data for Date 3</button>

    <div id="dataContainer"></div>

    <script>
        // Function to fetch and display data
        function fetchData(date) {
            // Replace with the actual API endpoint URL that accepts the date parameter
            const apiUrl = `https://example.com/api/data?date=${date}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    // Display the fetched data in the dataContainer
                    document.getElementById('dataContainer').innerHTML = JSON.stringify(data, null, 2);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }

        // Add event listeners to buttons
        document.getElementById('fetchDataButton1').addEventListener('click', () => {
            fetchData('date1');
        });

        document.getElementById('fetchDataButton2').addEventListener('click', () => {
            fetchData('date2');
        });

        document.getElementById('fetchDataButton3').addEventListener('click', () => {
            fetchData('date3');
        });
    </script>
</body>
</html>
