document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    alert(`Username: ${username}\nEmail Address: ${email}\nAge: ${age}`);
  });
