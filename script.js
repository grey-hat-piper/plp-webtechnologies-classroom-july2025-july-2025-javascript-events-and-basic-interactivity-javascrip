//navbar show/hidden feature
const navbutton = document.getElementById('navbutton'); //=
const navlists = document.getElementById('navlists'); //listcontents

const listcontents = function (){
    if (navlists.style.display == "none")
        {navlists.style.display = "block";}
    else
        {navlists.style.display = "none";}
}

navbutton.addEventListener("click", listcontents);


//Light/Dark mode toggle
const modeswitch = document.getElementById('modeswitch');

const light_mode = function (){
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')){
    modeswitch.textContent = 'LIGHT-MODE'; }
    else {
    modeswitch.textContent = 'DARK-MODE';
  }
}

modeswitch.addEventListener('click', light_mode);



// Form Validation

const form = document.getElementById('signup');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

// regex
const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordpattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

// Show error
function showError(input, message) {
  const formControl = input.parentElement;
  let error = formControl.querySelector("small");

  if (!error) {
    error = document.createElement("small");
    formControl.appendChild(error);
  }

  error.innerText = message;
  error.style.color = "red";

  input.style.borderColor = "red";
}

// Show success
function showSuccess(input) {
  const formControl = input.parentElement;
  let error = formControl.querySelector("small");
  if (error) {
    error.innerText = "";
  }
  input.style.borderColor = "green";
}

// Validation function
function validateInputs() {
  let isValid = true;

  // Validate Name
  if (username.value.trim() === "") {
    showError(username, "Name is required");
    isValid = false;
  } else {
    showSuccess(username);
  }

  // Validate Email
  if (!emailpattern.test(email.value.trim())) {
    showError(email, "Enter a valid email (e.g. user@example.com)");
    isValid = false;
  } else {
    showSuccess(email);
  }

  // Validate Password
  if (!passwordpattern.test(password.value.trim())) {
    showError(password, "Password must be at least 6 characters and include at least 1 letter and 1 number");
    isValid = false;
  } else {
    showSuccess(password);
  }

  return isValid;
}


// Handle form submission
form.addEventListener('submit', function (e) {
  if (!validateInputs()) {
    alert('User needed!!!')
    e.preventDefault(); // prevent submission if invalid

  } else {
    alert("Form submitted successfully!");
  }
});

// Live validation while typing
[username, email, password].forEach(input => {
  input.addEventListener("input", validateInputs);
});

