// api/validateToken.js
exports.handler = async (event, context) => {
  const { token } = event.queryStringParameters;

  // Example validation for token (you can enhance this with more complex logic)
  if (token && token === 'simple_token_example') { // Replace with actual logic
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        videoId: 'bee6734wjYsDZ2' // You can send the video ID or URL here
      })
    };
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        message: 'Invalid or expired token'
      })
    };
  }
};
