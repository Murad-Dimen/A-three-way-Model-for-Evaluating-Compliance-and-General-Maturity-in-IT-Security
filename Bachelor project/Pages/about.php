<!DOCTYPE html>
<html lang="en">
<head>
  <title>About</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon"  type="image/x-icon" href="../images/logo.png">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  
  <link rel="stylesheet" href="style.css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
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
          // This php script uses to check if the user logged in or not, based on it will display either login/logout-
          // in the navbar, and will also display the user name.
          session_start();
          if(isset($_SESSION['user_id'])) {
                              // If admin display admin panel 
              if($_SESSION['admin']) {
                    echo '<li><a href="../AdminPanel/adminPanel.php"><span class="glyphicon glyphicon-pencil"></span> Admin Panel</a></li>';
              }
                            // If logged in, display username and Logout button
              echo '<li><a><span style="margin:0; padding: 0;"id="username"></span></a></li>';
              echo '<li><a href="../Authentication/logout.php"><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>';
          } else {
              // If not logged in, display Login button
              echo '<li><a href="../Pages/login-form.html"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>';
          }
          ?>      
        </ul>
      </div>
    </div>
  </nav>
  <div style="text-align: center; justify-content: center;" >
    <h1 style="font-weight: bold;">Welcome to CyberTest4You</h1>
        <span><img class="page-logo" style=" margin-left: 45%; height: 10%; width: 10%;" src="../Images/logoB.png" alt="Card image">
        </span>
        <!--Div for the container-->
        <div class="container">
               <!--Div for the text-->
              <div class="aboutContent">
                          <span>
                            <p>We are a team of students working on a bachelor project in collaboration with <a href="https://www.soprasteria.no"><b>Sopra Steria</b></a>, 
                              <br>Our goal is to help companies improve their general information security and compliance practices.</p><br>
                          </span>
                          <span>
                            <p>We want to provide businesses with a platform that helps these companies get a general rating of their maturity  <br>
                              within information security, and to give them a general rating of compliance to regulations within specific sectors. 
                              </p><br>
                          </span>
                          <span>
                            <p>The maturity test is based on the <b>ISO 27001 standard</b>, which is a very known and established standard. <br>
                                It is the industry standard for a lot of companies, also in Norway. The compliance test is designed to get a general overview of how compliant 
                                <br>the company is to specific regulations within the sector and services they provide. 
                                Some of the questions related to regulation are also included in the <b>ISO 27001 standard</b>. </p><br>
                          </span>
                          <span>
                            <p>The team consists of three highly motivated students with a passion for cybersecurity, and we share a common goal of making a positive impact in the world.</p>
                          </span>
                          <p>Thank you for visiting our website, and we hope you find our tools and information helpful in improving your information security practices.</p>
                        </div>
                        <!--Div for the contact Information-->
                        <div class="contactInfo">
                          <span>
                            <h2>Contact Us:</h2>
                            <p style="  margin: 2%;">If you have any questions or comments, please feel free to contact us using the contact form on our website. 
                               <br> We're always happy to hear from you.
                            </p>
                            <div>
                            <!--Div for the Informations-->
                              <div">
                                <h2>Team Members:</h2>
                                <span>
                                  <h3>Murad Dimen</h3><a href="mailto:moradha@stud.ntnu.no">moradha@stud.ntnu.no</a>
                                </span>
                                <span>
                                  <h3>Jonas Simonsen</h3><a href="mailto:jonasfsi@stud.ntnu.no">jonasfsi@stud.ntnu.no</a>
                                </span>
                                <span>
                                  <h3>Sondre Bakke</h3><a href="mailto:sondrsba@stud.ntnu.no">sondrsba@stud.ntnu.no</a>
                                </span>
                              </div>
                            </div>
                            
                          </span>


                    </div>

      <script>
          // This script will fetch the user name if logged-in
        const Username = "<?php echo $_SESSION['name']; ?>";
        const usernameDisplay = document.getElementById("username");
        usernameDisplay.textContent = `${Username}`;
      </script>

</body>
</html>
