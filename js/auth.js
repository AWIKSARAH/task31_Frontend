const loginButton = document.getElementById("login-btn");

loginButton.addEventListener("click", async (e) => {
  e.preventDefault();

  // Validate the user input
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (!email || email === "") {
    alert("Please enter an email address.");
    return;
  }

  if (!password || password === "") {
    alert("Please enter a password.");
    return;
  }

  // Make a POST request to your backend API to log in the user
  try {
    const response = await fetch(
      "https://task31backend.onrender.com/api/auth/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (response.ok) {
     
      localStorage.setItem("token", data.token);

      // Redirect the user to the home page
      window.location.replace("home.html");
    } else {
      // An error occurred
      alert(data.message);
    }
  } catch (error) {
    // Handle the error
    alert(error.message);
  }
});
