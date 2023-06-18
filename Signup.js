// Get the form element
const signupForm = document.querySelector('.signup-form');

// Add event listener to the form submit event
signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Validate the form inputs
  const usernameInput = signupForm.querySelector('input[type="text"]');
  const emailInput = signupForm.querySelector('input[type="email"]');
  const passwordInput = signupForm.querySelector('input[type="password"]');

  // Validate username
  if (usernameInput.value.trim() === '') {
    showError(usernameInput, 'Username is required');
  } else {
    showSuccess(usernameInput);
  }

  // Validate email
  if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, 'Please enter a valid email');
  } else {
    showSuccess(emailInput);
  }

  // Validate password
  if (passwordInput.value.trim() === '') {
    showError(passwordInput, 'Password is required');
  } else {
    showSuccess(passwordInput);
  }
});

// Function to display error message for an input field
function showError(input, message) {
  const formControl = input.parentElement;
  const errorElement = formControl.querySelector('.error-message');
  formControl.classList.add('error');
  errorElement.textContent = message;
}

// Function to display success state for an input field
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
  const errorElement = formControl.querySelector('.error-message');
  errorElement.textContent = '';
}

// Function to validate email format
function isValidEmail(email) {
  // Simple email validation regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
