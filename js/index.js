//Array of all States in India
var states = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

//Array of valid numbers for corresponding states
//I have decide numbers between 500 and 537 are valid numbers for states respectively. States are define in alphabetical order.
var validNumbers = [
  501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515,
  516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530,
  531, 532, 533, 534, 535, 536,
];

//Declaration of variables
let isNameValid = false;
let isEmailValid = false;
let isPhoneNumberValid = false;

const nameBox = document.getElementById("name");
const emailBox = document.getElementById("email");
const phoneNumberBox = document.getElementById("phone_number");

const nameError = document.getElementById("error_name");
const emailError = document.getElementById("error_email");
const phoneNumberError = document.getElementById("error_phone");

const submitBtn = document.getElementById("submit");

const operator = document.getElementById("operator");
const state = document.getElementById("state");

//validating name field
nameBox.addEventListener("keyup", () => {
  var name = nameBox.value;
  var name_arr = name.split(" ");
  var expresion = /^\S[A-Za-z\s]+$/;
  if (name.length > 0) {
    if (name.match(expresion)) {
      if (name_arr.length >= 2) {
        if (name_arr[0].length >= 4 && name_arr[1].length >= 4) {
          nameError.innerText = "";
          nameBox.classList.remove("inputBoxError");
          isNameValid = true;
        } else {
          isNameValid = false;
          nameError.innerText =
            "* Each word of name should be minimum four characters";
          nameBox.classList.add("inputBoxError");
        }
      } else {
        isNameValid = false;
        nameBox.classList.add("inputBoxError");
        nameError.innerText = "* You have to write your full name.";
      }
    } else {
      isNameValid = false;
      nameBox.classList.add("inputBoxError");
      nameError.innerText = "* Name contains only alphabets";
    }
  } else {
    isNameValid = false;
    nameBox.classList.add("inputBoxError");
    nameError.innerText = "* Name Can not be blank";
  }
});

//validating email field
emailBox.addEventListener("keyup", () => {
  var email = emailBox.value;
  var emailPattern = /^[a-zA-Z0-9\._\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,7}$/;
  // var emailPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  if (email.length > 0) {
    if (email.match(emailPattern)) {
      emailError.innerText = "";
      emailBox.classList.remove("inputBoxError");
      isEmailValid = true;
    } else {
      isEmailValid = false;
      emailBox.classList.add("inputBoxError");
      emailError.innerText = "*Invalid email";
    }
  } else {
    isEmailValid = false;
    emailBox.classList.add("inputBoxError");
    emailError.innerText = "*email should not be blank";
  }
});

//validating phone number
phoneNumberBox.addEventListener("keyup", () => {
  var phoneNumber = phoneNumberBox.value.replace(/\D/g, "").substring(0, 10);
  var numberPattern = /^([0-9]){10}$/;
  if (phoneNumber.length > 0) {
    if (phoneNumber.match(numberPattern)) {
      if (phoneNumber.length == 10) {
        phoneNumberBox.classList.remove("inputBoxError");
        isPhoneNumberValid = true;
        phoneNumberError.innerText="";
      } else {
        isPhoneNumberValid = false;
        phoneNumberBox.classList.add("inputBoxError");
        phoneNumberError.innerText = "*phone Number should be only 10 digits";
      }
    } else {
      isPhoneNumberValid = false;
      phoneNumberBox.classList.add("inputBoxError");
      phoneNumberError.innerText = "*Phone number only contains number";
    }
  } else {
    isPhoneNumberValid = false;
    phoneNumberBox.classList.add("inputBoxError");
    phoneNumberError.innerText = "*phoneNumber should not be blank";
  }
});

//format phone number like (564)-(654)-7675

// function validateState(middle) {
//   for (var i = 0; i < 36; i++) {
//     if (validNumbers[i] == middle) {
//       state.innerText = ", " + states[i];
//       phoneNumberError.innerText = "";
//       break;
//     } else {
//       phoneNumberError.innerText = "* Invalid Number ";
//       state.innerText = "";
//     }
//   }
// }

function validateState(middle) {
  for (var i = 0; i < 1000; i++) {
    if (i == middle) {
      state.innerText =
        ", " + states[Math.floor(Math.random() * states.length)];
      phoneNumberError.innerText = "";
      break;
    } else {
      phoneNumberError.innerText = "* Invalid Number ";
      state.innerText = "";
    }
  }
}

const formatToPhone = (event) => {
  const target = event.target;
  const input = event.target.value.replace(/\D/g, "").substring(0, 10);

  const first = input.substring(0, 3);
  const middle = input.substring(3, 6);
  const last = input.substring(6, 10);

  if (input.length > 6) {
    target.value = `(${first}) - ${middle} - ${last}`;
  } else if (input.length > 3) {
    target.value = `(${first}) - ${middle}`;
    if (middle.length == 3) {
      validateState(middle);
    }else{
      state.innerText="";
    }
  } else if (input.length > 0) {
    target.value = `(${first}`;
  }

  if (first > 621 && first < 799) {
    operator.innerText = "Reliance Jio";
  } else if (first > 801 && first < 920) {
    operator.innerText = "Idea";
  } else if (first > 921 && first < 999) {
    operator.innerText = "Vodafone";
  } else if (input.length <= 3) {
    operator.innerText = "";
    phoneNumberError.innerText = "";
  } else {
    state.innerText="";
    phoneNumberError.innerText = "* Invalid Number ";
  }
};

phoneNumberBox.addEventListener("keyup", formatToPhone);

//submitting information
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (isNameValid && isEmailValid && isPhoneNumberValid) {
    var name = nameBox.value;
    var email = emailBox.value;
    var phoneNumber = phoneNumberBox.value;
    var otp = Math.floor(Math.random() * 100 + 1111);
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("EMAIL", email);
    sessionStorage.setItem("PHONE_NUMBER", phoneNumber);
    sessionStorage.setItem("OTP", otp);
    window.location.href = "thankyoupage.html";
  } else {
    if (!isNameValid && !isEmailValid && !isPhoneNumberValid) {
      nameBox.classList.add("inputBoxError");
      emailBox.classList.add("inputBoxError");
      phoneNumberBox.classList.add("inputBoxError");
    } else if (!isEmailValid && !isPhoneNumberValid) {
      emailBox.classList.add("inputBoxError");
      phoneNumberBox.classList.add("inputBoxError");
    } else if (!isNameValid && !isPhoneNumberValid) {
      nameBox.classList.add("inputBoxError");
      phoneNumberBox.classList.add("inputBoxError");
    } else if (!isNameValid && !isEmailValid) {
      nameBox.classList.add("inputBoxError");
      emailBox.classList.add("inputBoxError");
    } else if (!isPhoneNumberValid) {
      phoneNumberBox.classList.add("inputBoxError");
    } else if (!isNameValid) {
      nameBox.classList.add("inputBoxError");
    } else if (!isEmailValid) {
      emailBox.classList.add("inputBoxError");
    }
  }
});
