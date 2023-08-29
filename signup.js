function storeUser(){
    //set the value 
let email = document.getElementById("SignUpEmail").value;
let password = document.getElementById("signUpPassword").value;
let userType = document.getElementById("userType").value;

const signUpList = {
email:email,
password:password,
id:Math.random(),
userType:userType,
}
console.log({signUpList});


const users = JSON.parse(window.localStorage.getItem("users"));
console.log({users})
let firstUser = [];


if(users === null) {
  firstUser.push(signUpList);
  console.log(firstUser);
} else {
    users.push(signUpList)
}


window.localStorage.setItem('users', JSON.stringify(users ? users : firstUser));



window.location.href = "/";

}

