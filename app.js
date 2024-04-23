let header = document.querySelector("h2");
let userName = document.getElementById("user");
let password = document.getElementById("password");
let userNameAndEmail = document.getElementById("user-email");
let email = document.getElementById("email");
let signInButton = document.querySelector(".SigninButt");
let signUpButton = document.querySelector(".SignupButt");
let signUpLink = document.querySelector(".sign-up");
let forgotPassLink = document.querySelector(".forgotPass");
let loginSocial = document.querySelector(".login-with");
let footerLink = document.querySelector(".lastP");
let inputUserAndEmail = document.querySelector(".inputs-fieldF");
let inputUserName = document.querySelector(".input1");
let inputEmail = document.querySelector(".inputs-fieldT");
let inputs = document.querySelectorAll("input");

let array = [];

let isLogin = true;

signUpLink.addEventListener("click", () => {
  if (isLogin) {
    header.textContent = "Register";
    inputUserAndEmail.style.display = "none";
    inputUserName.style.display = "block";
    inputEmail.style.display = "block";
    forgotPassLink.style.display = "none";
    loginSocial.textContent = "Register with social accounts";
    signUpButton.style.display = "block";
    signInButton.style.display = "none";
    signUpLink.className = "login";
    signInButton.className = "SignupButt";
    signUpLink.textContent = "Login";
    footerLink.textContent = "Already have an account? ";
    footerLink.appendChild(signUpLink);
  } else {
    header.textContent = "Login";
    inputUserAndEmail.style.display = "block";
    inputUserName.style.display = "none";
    inputEmail.style.display = "none";
    forgotPassLink.style.display = "block";
    loginSocial.textContent = "Login with social accounts";
    signUpButton.style.display = "none";
    signInButton.style.display = "block";
    signUpLink.className = "sign-up";
    signUpLink.textContent = "Sign Up";
    footerLink.textContent = "Don't have an account? ";
    footerLink.appendChild(signUpLink);
  }

  // we search for a way to make a toogle since there is no a toogle function for this (there is one for classList but we dont think it will help so we make this :)
  // give us your feedback :D

  isLogin = !isLogin;
});

signUpButton.addEventListener("click", () => {
  checkCredentials();
  clearInputs();
});

signInButton.addEventListener("click", () => {
  if (checkValidation(array)) {
    clearInputs();
    alert("Logged");
  } else {
    alert("Invalid Credentials");
    clearInputs();
  }
});

function checkCredentials() {
  if (
    userName.value.length > 0 &&
    email.value.length > 0 &&
    password.value.length > 0
  ) {
    let info = {
      name: userName.value,
      email: email.value,
      password: password.value,
    };
    array.push(info);
    console.log(array);
    alert("User Created");
  } else {
    inputs.forEach((input) => {
      input.style.borderColor = "red";
    });
  }
}

function checkValidation(array) {
  return array.find((value) => {
    return (
      (value.name === userNameAndEmail.value ||
        value.email === userNameAndEmail.value) &&
      password.value === value.password
    );
  });
}

function clearInputs() {
  inputs.forEach((input) => {
    input.value = "";
  });
}

/*

Finally Credits to:

- Mohammad (thinks HTML is a shortcut for "How To Meet Ladies")

- Zahi (believes that writing comments in code is like talking to a wall; the wall doesn't understand, but it makes you feel better)

- Abed Al Rahman (believes that CSS stands for "Coding, Styling, Suffering" because it always seems to take longer than expected)

- Abed Al Razak (thinks that using "git commit -m 'Fix for real this time'" is the ultimate developer's confession of guilt)



We are waiting your feedbacks so please reach out to us as soon as you correct our project. 

We didnt have much time to do this project , so i hope what we achieved satisfies you :D 



*/
