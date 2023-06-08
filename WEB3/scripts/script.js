// Get the signup button and the signup modal
const signupButton = document.getElementById('signup-button');
const signupModal = document.getElementById('signup-modal');

// Show the signup modal when the signup button is clicked
signupButton.addEventListener('click', () => {
  signupModal.style.display = 'block';
});

// Get the form fields and the welcome message
const usernameField = document.getElementById('username');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const welcomeMessage = document.getElementById('welcome-message');
const usernameDisplay = document.getElementById('greeting');

// Handle the form submission
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Get the values from the form fields
  const username = usernameField.value;
  const email = emailField.value;
  const password = passwordField.value;
  
  // Display the welcome message with the username
  usernameDisplay.textContent = username;
  welcomeMessage.style.display = 'block';
  
  // Hide the signup modal and the signup button
  signupModal.style.display = 'none';
  signupButton.style.display = 'none';
});




// Setze den Cookie mit dem Benutzernamen
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  // Hole den Cookie mit dem Benutzernamen
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  // Prüfe, ob der Benutzername bereits im Cookie gespeichert ist
  window.onload = function() {
    var username = getCookie("username");
    if (username != "") {
      document.getElementById("greeting").innerHTML = "Hello, " + username;
    } else {
      // Wenn der Benutzername nicht im Cookie gespeichert ist, zeige das Anmeldeformular an
      document.getElementById("signup-form").style.display = "block";
    }
  }
  
  // Speichere den Benutzernamen im Cookie, wenn das Formular abgeschickt wird
  document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username-input").value;
    setCookie("username", username, 365);
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("greeting").innerHTML = "Hello, " + username;
  });
  




  // Get the signup container
const signupContainer = document.getElementById('signup-container');

// Close the signup modal if the user clicks outside of the signup area
document.addEventListener('click', (event) => {
const isClickInsideSignup = signupContainer.contains(event.target);
if (!isClickInsideSignup) {
signupModal.style.display = 'none';
}
});