const loginFormHandler = async (event) => {
  // Prevents the default form submission behavior which reloads the page.
  event.preventDefault();

  // Retrieves the values entered in the email and password fields and trims any whitespace.
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // awaits the users log in inputs to send to the server.js as a JSON to authenticate
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
