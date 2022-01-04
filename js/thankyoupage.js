//Declaration of variables
let isValidOtp = false;
let attempt1 = true;
let attempt2 = true;
let attempt3 = true;

let firstNameTag = document.getElementById("first_name_tag");
let phoneNumberTag = document.getElementById("phone_number_tag");
let validateOtpBtn = document.getElementById("validate_otp_btn");
let otpInput = document.getElementById("otp_input");
let otpInputError = document.getElementById("error_otp");
let otpVerificationContainer = document.getElementById(
  "otp_verification_container"
);
let otpSuccessfullContainer = document.getElementById(
  "otp_successfull_container"
);
let otpFailedContainer = document.getElementById("otp_failed_container");

//accessing submitted information using sessionStorage
var name = sessionStorage.getItem("NAME");
var email = sessionStorage.getItem("EMAIL");
var phoneNumber = sessionStorage.getItem("PHONE_NUMBER");
var otp = sessionStorage.getItem("OTP");
console.log("Your OTP is ", otp);

var name_arr = name.split(" ");
var firstName = name_arr[0];

firstNameTag.innerText = "Dear " + firstName + ",";
phoneNumberTag.innerText = phoneNumber;

//validating otp input
otpInput.addEventListener("keyup", () => {
  let otp = otpInput.value;
  var numberPattern = /^[0-9]+$/;
  if (otp.length > 0) {
    if (otp.match(numberPattern)) {
      if (otp.length == 4) {
        isValidOtp = true;
        otpInputError.innerText = "";
      } else {
        isValidOtp = false;
        otpInputError.innerText = "* OTP muct be 4 digit";
      }
    } else {
      isValidOtp = false;
      otpInputError.innerText = "* OTP only contains number";
    }
  } else {
    isValidOtp = false;
    otpInputError.innerText = "* OTP can not be empty";
  }
});

//validating otp
validateOtpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (isValidOtp) {
    if (otpInput.value == otp) {
      otpVerificationContainer.classList.add("hide");
      otpSuccessfullContainer.classList.remove("hide");
      setTimeout(() => {
        window.location.href = "http://pixel6.co/";
      },1000);
    } else {
      otpInputError.innerText = "* Invalid OTP";
      otpInput.value = "";
      if (attempt1 && attempt2 && attempt3) {
        otpInputError.innerText = "* 2 attempts";
        attempt1 = false;
      } else if (!attempt1 && attempt2 && attempt3) {
        otpInputError.innerText = "* 1 attempts";
        attempt2 = false;
      } else if (!attempt1 && !attempt2 && attempt3) {
        otpInputError.innerText = "";
        attempt3 = false;
        otpFailedContainer.classList.remove("hide");
        otpVerificationContainer.classList.add("hide");
        setTimeout(() => {
          window.location.href = "http://pixel6.co/404";
        },1000);
      } else if (!attempt1 && !attempt2 && !attempt3) {
        setTimeout(() => {
          window.location.href = "http://pixel6.co/404";
        },1000);
        otpFailedContainer.classList.remove("hide");
        otpVerificationContainer.classList.add("hide");
      }
    }
  } else {
    otpInputError.innerText = "* Please type valid OTP before submitting";
  }
});
