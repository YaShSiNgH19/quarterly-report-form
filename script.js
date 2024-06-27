document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Fetch form data
    const formData = new FormData(this);
  
    // Convert form data to JSON object
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
  
    // Send form data to your Google Apps Script URL
    const url = 'https://script.google.com/macros/s/AKfycbzmQn_875iGPQSugVfcncHtRxbNoWgRZTKXTpg4EHX_1C7eGQwut7v4tkjYTHUFVE3LcA/exec'; // Replace this with your actual URL
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(jsonData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Error submitting report.');
      }
    })
    .then(data => {
      document.getElementById('response').innerText = data;
    })
    .catch(error => {
      document.getElementById('response').innerText = error.message;
    });
  });
  