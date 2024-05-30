const logout = async () => {
  // Sends a POST request to the server-side logout route. This request is meant to destroy the user's session.
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If the logout is successful, redirect the user to the login page
    document.location.replace("/login");
  } else {
    alert("Failed to log out");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
