// Dummy users array for signup/login simulation
let users = [];

// SIGNUP FUNCTION
function handleSignup(event) {
  event.preventDefault();

  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (username && email && password) {
    const user = { username, email, password };
    users.push(user);
    alert("Signup successful! Now login.");
    window.location.href = "login.html";
  } else {
    alert("Please fill all fields.");
  }
}

// LOGIN FUNCTION
function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    alert(`Welcome, ${user.username}!`);
    window.location.href = "upload.html";
  } else {
    alert("Invalid credentials!");
  }
}

// UPLOAD APP FUNCTION
function handleAppUpload(event) {
  event.preventDefault();

  const appName = document.getElementById("app-name").value;
  const description = document.getElementById("app-description").value;
  const file = document.getElementById("app-file").files[0];

  if (appName && description && file) {
    alert(`App "${appName}" uploaded successfully!`);
    // Simulate showing it in app list
    const appList = document.getElementById("app-list");
    const li = document.createElement("li");
    li.innerHTML = `<strong>${appName}</strong>: ${description}`;
    appList.appendChild(li);

    // Clear form
    event.target.reset();
  } else {
    alert("Please fill all fields and upload the APK.");
  }
}
<!-- Firebase App (required) -->
<script src="https://www.gstatic.com/firebasejs/9.24.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.24.0/firebase-storage.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.24.0/firebase-database.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "XXXXXXXXXXXX",
    appId: "APP_ID",
    databaseURL: "https://YOUR_PROJECT.firebaseio.com"
  };

  const app = firebase.initializeApp(firebaseConfig);
</script>
