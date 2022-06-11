/* CREDIT TO: https://github.com/rahulkhimsuriya/frontendmentor-base-apparel-coming-soon-page/blob/master/main.js
I followed his solution to complete the JavaScript part
*/

const inputEl = document.querySelector("#newsLetter");
const btn = document.querySelector(".subBtn");
const emailCheck = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const iconError = document.querySelector(".error");
const textError = document.querySelector(".errorText");
const textSuccess = document.querySelector(".successText");
const formEmail = document.querySelector(".emailValidation");
let erorrs = [];

btn.addEventListener("click", (e) => {
  //remove success  class
  textError.classList.remove("textSuccess");

  //reset errors
  errors = [];
  // Prevent default action of form
  e.preventDefault();
  //validate email
  const email = inputEl.value;

  // if email is blank or undefined
  if (email == "" || email === undefined) {
    errors.push("Please enter your email");
    //show error
    iconError.style.display = "block";
    textSuccess.style.display = "none";
    textError.innerText = errors[0];
  } else if (!email.match(emailCheck)) {
    errors.push("Please enter your correct email");
    //Show error icon
    iconError.style.display = "block";
    textSuccess.style.display = "none";
    textError.innerText = errors[0];
  }

  // If everything is all clear
  if (!errors.length > 0) {
    //hide error icon and text
    iconError.style.display = "none";
    textError.style.display = "none";
    /* Show success message */
    textSuccess.style.display = "block";
    textSuccess.innerText = "Thank you for subscribing to our newsletter";
  }
  /* Reload after 2sec if user puts in correct email */
  if (!errors.length > 0) {
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  }
});
