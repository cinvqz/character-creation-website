const loginFormHandler = async function (event) {
  event.preventDefault();

  console.log("after event listener");

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    console.log("before response");

    const response = await fetch("/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      document.location.replace("/home");
    } else {
      alert("Failed to log in. Please check your credentials.");
      console.error("Failed login attempt:", await response.json());
    }
  }
};

document.querySelector("#loginbtn").addEventListener("click", loginFormHandler);
