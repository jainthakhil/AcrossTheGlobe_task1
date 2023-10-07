const openAccount = document.getElementById("createAccount");
const accountPage = document.getElementById("account-page");
const body = document.getElementById("body");
openAccount.addEventListener("click", function () {
  accountPage.style.display = "flex";
  // body.style.overflow = "hidden";
});

const cross1 = document.getElementById("cross");
const cross2 = document.getElementById("small-cancel");
cross1.addEventListener("click", function (event) {
  event.preventDefault();
  accountPage.style.display = "none";
});
cross2.addEventListener("click", function (event) {
  event.preventDefault();
  accountPage.style.display = "none";
});

const groupBtn = document.getElementById("group-btn");
groupBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (groupBtn.innerHTML === "Join group") {
    accountPage.style.display = "flex";
    groupBtn.innerHTML = "Leave group";
  } else {
    groupBtn.innerHTML = "Join group";
  }
});

const mainForm = document.querySelectorAll(".main-form");
const signin = document.getElementById("signin");
const signup = document.getElementById("signup");
const signupPage = document.getElementById("signup-form");
const signinPage = document.getElementById("signin-form");
const eye = document.getElementById("eye");
const password = document.getElementById("password");
const eyeBtn = document.getElementsByClassName("password-eye");
const createHead = document.getElementById("create-head");
const signinHead = document.getElementById("signin-head");
const accountPara1 = document.getElementById("accountpara1");
const accountPara2 = document.getElementById("accountpara2");

const phoneCreate = document.getElementById("small-create");
const phoneSignin = document.getElementById("small-signin");

signin.addEventListener("click", function (event) {
  event.preventDefault();
  signupPage.style.display = "none";
  signinPage.style.display = "block";
  eye.style.transform = "translateY(40%)";
});

signup.addEventListener("click", function (event) {
  event.preventDefault();
  signupPage.style.display = "block";
  signinPage.style.display = "none";
  signupPage.style.backgroudColor = "red";
});
phoneCreate.addEventListener("click", function (event) {
  event.preventDefault();
  signupPage.style.display = "block";
  signinPage.style.display = "none";
  createHead.style.marginLeft = "25px";
  eye.style.transform = "translateY(40%)";
});

phoneSignin.addEventListener("click", function (event) {
  event.preventDefault();
  signupPage.style.display = "none";
  signinPage.style.display = "block";
  eye.style.transform = "translateY(40%)";
  signinHead.innerHTML = "Welcome back!";
  signinHead.style.marginLeft = "25px";
});
