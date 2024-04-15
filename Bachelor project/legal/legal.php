<?php include("../Authentication/check_session.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Legal</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="legal.css">


  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

  

<script>

function healthcare(){
  var script = document.createElement('script');
  script.src = 'legalHealth.js';
  head = document.getElementsByTagName("head")[0];
  head.appendChild(script);
}

function Finance(){
  var script = document.createElement('script');
  script.src = 'legalFinance.js';
  head = document.getElementsByTagName("head")[0];
  head.appendChild(script);
}

  
</script>

</head>

<body>
 
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                        
        </button>
        <a href="../index.php" >
          <img class="logo-img" src="../Images/logo.png" alt="Card image">
        </a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li><a href="../index.php">Home</a></li>
          <li><a href="../Pages/TestingCenter.php">Testing Center</a></li>
          <li><a href="../Pages/about.php">About</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
        <?php
          if(isset($_SESSION['user_id'])) {
              // User is logged in, display username and Logout button
              //echo '<li><a href="../AdminPanel/adminPanel.php"><span class="glyphicon glyphicon-pencil"></span> Admin Panel</a></li>';
              echo '<li><a><span style="margin:0; padding: 0;"id="username"></span></a></li>';
              echo '<li><a href="../Authentication/logout.php"><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>';
          } else {
              // User is not logged in, display Login button
              echo '<li><a href="./Pages/login-form.html"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>';
          }
          ?>           
        </ul>
      </div>
    </div>
  </nav>
  
  <div class="question-box" id="question-box">  
   
    <main>
      <h2>Choose sector</h2>
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Choose Sector
        <span class="caret"></span></button>
        <ul class="dropdown-menu">
          <li id="finance" onclick="Finance()"><a>Finance</a></li>
          <li id="Healthcare" onclick="healthcare()"><a>Healthcare</a></li>
        </ul>
      </div>
    </main>
  </div>


<script>
  const Username = "<?php echo $_SESSION['name']; ?>";
  const usernameDisplay = document.getElementById("username");
  usernameDisplay.textContent = `${Username}`;

</script>
  
</body>
</html>