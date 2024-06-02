<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registration or Sign Up</title>
  <link rel="stylesheet" href="signup.css">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">

</head>

<body>
  <div class="wrapper">
    <h2>Registration</h2>
    <form action="" method="POST" onsubmit="return validateForm()">
      <div class="input-box">
        <input type="text" id="firstName" name="firstName" placeholder="Enter your First Name" required>
      </div>
      <div class="input-box">
        <input type="text" id="lastName" name="lastName" placeholder="Enter your Last Name" required>
      </div>
      <div class="input-box">
        <input type="email" id="email" name="email" placeholder="Enter your Email" required>
      </div>
      <div class="input-box">
        <input type="password" id="password" name="password" placeholder="Create Password" required minlength="8">
        <small>Password must be at least 8 characters long.</small>
      </div>
      <div class="input-box">
        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter your Phone Number" required pattern="[0-9]{11}" title="Please enter a 10-digit phone number">
        <small>Enter a 10-digit phone number without spaces or dashes.</small>
      </div>
      <div class="policy">
        <input type="checkbox" id="terms" required>
        <h3>I accept all terms & condition</h3>
      </div>
      <div class="input-box button">
        <input type="submit" name="submit" value="Register Now">
      </div>
      <div class="text">
        <h3>Already have an account? <a href="login.php">Login now</a></h3>
      </div>
    </form>
  </div>

  <script>
    function validateForm() {
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const phoneNumber = document.getElementById('phoneNumber').value.trim();
      const terms = document.getElementById('terms').checked;

      if (firstName === '' || lastName === '') {
        alert('Please enter your full name.');
        return false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
      }

      if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return false;
      }

      const phonePattern = /^\d{11}$/;
      if (!phonePattern.test(phoneNumber)) {
        alert('Please enter a 10-digit phone number.');
        return false;
      }

      if (!terms) {
        alert('Please accept the terms & conditions.');
        return false;
      }

      return true;
    }
  </script>
</body>

</html>

<?php
if (isset($_POST["submit"])) {
  $servername = "localhost";
  $username = "root";
  $db_password = "";
  $database = "e-commerce";

  $firstname = $_POST["firstName"];
  $lastname  = $_POST["lastName"];
  $pass      = $_POST["password"];
  $phone     = $_POST["phoneNumber"];
  $email     = $_POST["email"];

  $connect = mysqli_connect($servername, $username, $db_password, $database);

  if (!$connect) {
    die("Connection Failed:" . mysqli_connect_error());
  }

  $checkEmailQuery = "SELECT * FROM users WHERE email='$email'";
  $result = mysqli_query($connect, $checkEmailQuery);

  if (mysqli_num_rows($result) > 0) {
    echo '<script>alert("Email already exists. Please use a different email address.")</script>';
  } else {
    $sql = "INSERT INTO users(fname, lname, email, password, phoneno) VALUES ('$firstname', '$lastname', '$email', '$pass', '$phone')";

    if (mysqli_query($connect, $sql)) {
      echo '
            <script>alert("Successfully Signed Up");
            window.location.href="login.php";
            </script>';
    } else {
      echo "Error: " . mysqli_error($connect);
    }
  }

  mysqli_close($connect);
}
?>