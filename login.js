function LoginUser(){

 // Retrieve the stored user data from localStorage
const userData = JSON.parse(window.localStorage.getItem("users"));
  console.log({userData });

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  
for(i=0; i < userData.length; i++){
    console.log({i});

  if( email === userData[i].email && password === userData[i].password){

    if(userData[i].userType && userData[i].userType === "customer") {
        window.location = "/customer-profile.html"

    } else {
        window.location = "/donor-profile.html"
    }
  }

}



 





}

// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate(){
// var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;
// if ( username == "Formget" && password == "formget#123"){
// alert ("Login successfully");
// window.location = "index.html"; // Redirecting to other page.
// return false;
// }
// else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// // Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }
// }