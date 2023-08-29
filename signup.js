function storeUser() {
  // Set the values
  let email = document.getElementById("SignUpEmail").value;
  let password = document.getElementById("signUpPassword").value;
  let userType = document.getElementById("userType").value;

  if (email === "" || password === "" || userType === "") {
    alert("Please fill out all required fields.");
    console.log("required fields missing")
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if(!emailRegex.test(email)) {
    alert("Invalid Email Format");
    return;
  }

  const signUpList = {
    email: email,
    password: password,
    id: Math.random(),
    userType: userType,
  };
  console.log({ signUpList });

  
  const users = JSON.parse(window.localStorage.getItem("users"));
  console.log({ users });
  let firstUser = [];

  if (users === null) {
    firstUser.push(signUpList);
    console.log(firstUser);
  } else {
    users.push(signUpList);
  }

  window.localStorage.setItem('users', JSON.stringify(users ? users : firstUser));

window.location.href = "/";
}
