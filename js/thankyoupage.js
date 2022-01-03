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
otpInput.addEventListener("blur", () => {
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
      window.location.href = "http://pixel6.co/";
      console.log("Validation Succssfull");
    } else {
      otpInputError.innerText = "* Invalid OTP";
      console.log("Incorrect OTP");
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
        window.location.href = "http://pixel6.co/404";
      } else if (!attempt1 && !attempt2 && !attempt3) {
        window.location.href = "http://pixel6.co/404";
      }
    }
  } else {
    otpInputError.innerText = "* Please type OTP before submitting";
  }
});

