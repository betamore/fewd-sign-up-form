//== Variables ==//

// Grab form element
var form = document.querySelector('form');
// Grab all non-submit input fields
var inputs = document.querySelectorAll('input:not([type="submit"])');
// Grab submit input button
var submit = document.querySelector('input[type="submit"]');

// Disable native HTML5 client-side form validation
form.setAttribute('novalidate', '');

//== Functions ==//

// Form validation function
function formValidation(event) {
  // Loop through input fields -> apply validation warnings as necessary
  for (input of inputs) {
    // Reset input field warnings
    input.classList.remove('show-warning');
    input.nextElementSibling.style.display = 'none';
    // If text and password input fields do not have a value
    if ((input.type === 'text' || input.type === 'password') && input.value === '') {
      // Show the associated warning message
      input.classList.add('show-warning');
      input.nextElementSibling.style.display = 'block';
    }
    // If email input field does not contain @ or . symbols
    if (input.type === 'email' && !input.value.includes('@' && '.')) {
      // Show the associated warning message
      input.classList.add('show-warning');
      input.nextElementSibling.style.display = 'block';
    }
  }
  // Prevent default form submission behavior
  event.preventDefault();
}

//== Event Listeners ==//

// Listen for click events on submit input
submit.addEventListener('click', formValidation, false);
// Listen for blur events on input fields
document.addEventListener('blur', function(event) {
  if (event.target.matches('input:not([type="submit"])')) {
    formValidation(event);
  }
}, true);
