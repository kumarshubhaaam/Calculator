const linkshortifyApiKey = '72a528cbd7a9686e99344385cda651708238c088'; // Your Linkshortify API key

// Function to shorten the URL via Linkshortify API
function shortenUrl(originalUrl) {
  const apiUrl = 'https://api.linkshortify.com/v1/shorten'; // Linkshortify API endpoint
  const data = {
    url: originalUrl,
    apiKey: linkshortifyApiKey // Use your actual API key here
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success && data.shortenedUrl) {
      // Add token to the redirect URL
      const redirectUrl = `${data.shortenedUrl}?token=${generateToken()}`;
      window.location.href = redirectUrl; // Redirect to the shortened URL
    } else {
      alert('Error shortening URL.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error connecting to Linkshortify.');
  });
}

// Function to generate a token for the user (valid for 24 hours)
function generateToken() {
  return 'simple_token_example'; // Replace with actual token generation logic if needed
}

// Attach event listeners to all "Access Video" buttons
document.querySelectorAll('.accessButton').forEach(button => {
  button.addEventListener('click', function() {
    const videoUrl = this.getAttribute('data-video-url'); // Get the video URL from the data attribute
    shortenUrl(videoUrl); // Call the function to shorten the URL
  });
});
