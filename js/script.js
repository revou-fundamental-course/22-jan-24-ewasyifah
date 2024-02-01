// Get form elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const interestSelect = document.getElementById('interest');

// Function to handle form submission
function handleFormSubmit(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get user's input
  const name = nameInput.value;
  const email = emailInput.value;
  const interest = interestSelect.value;

  // Validate user's input
  if (name === '' || email === '' || interest === 'null') {
    alert('Please fill out all required fields.');
    return;
  }

  // Process user's input
  const order = {
    name,
    email,
    interest,
  };

  // Send order to server
  sendOrderToServer(order);

  // Reset form
  form.reset();
}

// Function to send order to server
function sendOrderToServer(order) {
  // Send a POST request to the server with the user's order
  fetch('/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle server response
      if (data.success) {
        alert('Your order has been received!');
      } else {
        alert('There was an error processing your order. Please try again later.');
      }
    })
    .catch((error) => {
      // Handle network errors
      console.error('Error sending order to server:', error);
      alert('There was a network error processing your order. Please try again later.');
    });
}

// Add event listener to form to handle submission
form.addEventListener('submit', handleFormSubmit);

document.addEventListener('DOMContentLoaded', () => {
    const callUsButton = document.querySelector('.page-contact .button-center button');
  
    callUsButton.addEventListener('click', () => {
      // Add your desired functionality here, such as making a call or showing a contact form
      alert('Call us now!');
    });
  });