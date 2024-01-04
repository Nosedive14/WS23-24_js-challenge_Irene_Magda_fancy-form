//Add event listener on submit and retrieve data
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    resetValidation();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    // Validate username
    if (!validateUsername(username)) {
      displayValidationMessage("Username must start with a capital letter");
      highlightField("username");
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
      displayValidationMessage("Please enter a valid email address");
      highlightField("email");
      return;
    }

    // Validate age
    if (!validateAge(age)) {
      displayValidationMessage("Please enter a valid age");
      highlightField("age");
      return;
    }

    // If validations pass
    alert(`Username: ${username}\nEmail Address: ${email}\nAge: ${age}`);
  });

// Function to reset validation styles and messages
function resetValidation() {
  const formFields = ["username", "email", "age"];
  formFields.forEach((field) => {
    document.getElementById(field).classList.remove("invalid");
    const message = document.getElementById(`${field}Error`);
    if (message) {
      message.parentNode.removeChild(message);
    }
  });
}

// Function to highlight the field with invalid input
function highlightField(field) {
  document.getElementById(field).classList.add("invalid");
}

// Function to display validation messages
function displayValidationMessage(messageText) {
  //Remove existing error messages
  const existingMessages = document.querySelectorAll(".error-message");
  existingMessages.forEach((msg) => msg.parentNode.removeChild(msg));

  //Create and display the new error message
  const message = document.createElement("p");
  message.className = "error-message";
  message.textContent = messageText;

  const form = document.getElementById("signupForm");
  form.appendChild(message);
}

// Function to validate username (must start with a capital letter)
function validateUsername(username) {
  const regex = /^[A-Z][a-z]*$/;
  return regex.test(username);
}

// Function to validate email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Function to validate age (must be a positive integer)
function validateAge(age) {
  const regex = /^[1-9]\d*$/;
  return regex.test(age);
}
