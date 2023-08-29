function LoginUser() {
  // Retrieve the stored user data from localStorage
  const userData = JSON.parse(window.localStorage.getItem("users"));
  console.log({ userData });

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let isLoginSuccessful = false; // Initialize a flag

  for (let i = 0; i < userData.length; i++) {
    console.log({ i });

    if (email === userData[i].email && password === userData[i].password) {
      if (userData[i].userType && userData[i].userType === "customer") {
        window.location = "/customer-profile.html";
      } else if (userData[i].userType && userData[i].userType === "donor") {
        window.location = "/donor-profile.html";
      } else {
        alert("Alert");
      }
      
      // Set the flag to true for a successful login
      isLoginSuccessful = true; 
      break; // Exit the loop when a match is found
    }
  }

  // Check the flag to see if login was unsuccessful
  if (!isLoginSuccessful) {
    alert("Incorrect email or password");
  }
};