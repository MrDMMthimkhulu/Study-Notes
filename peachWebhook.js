// netlify/functions/peachWebhook.js
exports.handler = async (event, context) => {
  // Check if the request method is POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405, // Method Not Allowed
      body: 'Method Not Allowed'
    };
  }

  try {
    // Parse the incoming request body
    const data = JSON.parse(event.body);
    console.log('Webhook received:', data);

    // Here you can process the payment data
    // For example, you can verify the payment or update user access

    return {
      statusCode: 200, // Success
      body: 'Webhook processed successfully'
    };
  } catch (error) {
    console.error('Error processing webhook:', error);
    return {
      statusCode: 500, // Internal Server Error
      body: 'Internal Server Error'
    };
  }
};
