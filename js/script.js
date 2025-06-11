document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };

  // Send email using EmailJS
  emailjs.send('service_lt3acm7', 'khadkaroshan233@gmail.com', formData) // Replace with your Service ID and Template ID
    .then(function(response) {
      alert('Email sent successfully!');
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      alert('Failed to send email. Please try again.');
      console.log('FAILED...', error);
    });
});