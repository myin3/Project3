<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Create an Account</title>
    <link rel="stylesheet" type="text/css" href="project3.css">
    <style type="text/css">
    .form-container {
      position: absolute;
      top: 20%;
      background: white;
      width: 25%;
      border: 1px solid lightgrey;
      padding: 15px; 
    }
    .head {
      text-align: center;
    }
    input[type=text], input[type=password] {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    .button {
      display: inline-block;
      border-radius: 4px;
      background-color: #8ac4d0;
      border: none;
      color: #FFFFFF;
      text-align: center;
      font-size: 14px;
      padding: 15px;
      cursor: pointer;
      margin: 5px;
    }
    .aside {
        background: white;
        position: absolute;
        right: 15%;
        top: 20%;
        padding: 15px; 
    }
    li {
        margin: 15px; 
    }
    h3{
      color: #e4bad4;
    }
    a {
        position: relative;
        right: -300px;
    }
  </style>
</head>
<body>
    <div class="form-container">
    <h1 class="head">Create an Account</h1>
    <form name="Signup" action="signup-submit.php" method="POST">
        Username: <input type="text" name="Username" required> <br>
        Password: <input type="password" name="Password" pattern="(?=.*[^A-Za-z0-9])(?=.*[a-z])(?=.*[A-Z]).{4,}" title="Must contain at least one number, one uppercase, one symbol, and at least 4 or more characters" required> <br>
        <button class="button" type="submit" name="Submit">Submit</button>
        <a href="login.php">Login Here</a>
    </form>
    <?php session_save_path("./");
    session_start();
    if (isset($_SESSION['error'])) {
        echo $_SESSION['error'];
    }
    ?>
    </div>
    <div class="aside">
        <h3>Password Requirements</h3>
        <ul>
            <li>Must Contain a uppercase letter</li>
            <li>Must Contain a number</li>
            <li>Must Contain a symbol</li>
            <li>Must be at least 4 characters long</li>
        </ul>
    </div>
</body>
</html>