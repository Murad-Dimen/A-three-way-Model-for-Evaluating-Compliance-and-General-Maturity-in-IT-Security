<!DOCTYPE html>
<html lang="en">
<head>
  <title>Home</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="./images/logo.png">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="Style.css">
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
        <a href="./index.php" >
          <img class="logo-img" src="./Images/logo.png" alt="Card image">
        </a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li><a href="./index.php">Home</a></li>
          <li><a href="./Pages/TestingCenter.php">Testing Center</a></li>
          <li><a href="./Pages/about.php">About</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <?php
          // This php script uses to check if the user logged in or not, based on it will display either login/logout-
          // in the navbar, and will also display the user name.
          session_start();
          if(isset($_SESSION['user_id'])) {
                              // If admin display admin panel 
              if($_SESSION['admin']) {
                    echo '<li><a href="./AdminPanel/adminPanel.php"><span class="glyphicon glyphicon-pencil"></span> Admin Panel</a></li>';
              }
                            // If logged in, display username and Logout button
              echo '<li><a><span style="margin:0; padding: 0;"id="username-display"></span></a></li>';
              echo '<li><a href="./Authentication/logout.php"><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>';
          } else {
              // If not logged in, display Login button
              echo '<li><a href="./Pages/login-form.html"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>';
          }
          ?>        
        </ul>
      </div>
    </div>
  </nav>

  <!--The home page content-->
<h1 style="font-weight: bold;">Welcome to CyberTest4You</h1>
<div class="main-content"> 
  <p>CyberTest4You prioritizes system and data security. To ensure that the organizations are following the industry security best practices
     and maintaining a high level of security, we have developed a security compliance testing tool.
    </p>      
    <p>Our security compliance tester is a comprehensive tool designed to assess the organization's compliance degree within ISO27001 security 
       standards and regulations. It evaluates the organization's systems, processes, and controls to ensure that they meet the necessary
       requirements for data protection, confidentiality, integrity, and availability.
      </p>
      <p>CyberTest4You provides a user-friendly interface, guiding you through a series of questions and assessments related to security practices. 
        It covers areas such as access controls, network security, data handling, incident response, employee training, and more. Upon completion, you will 
        receive a comprehensive report that highlights areas of compliance and areas that need improvement.
      </p>
      <br><br><br><br><br>
   <h2> Choose your sector of expertise:</h2>

</div>

<!--Both containers that contain the sectors-->
<div class="page-containers">

        <div class="grid-containers">
            <div class="containers" onclick="location.href='./Pages/healthcare.php'">
              <img class="container-img" src="./Images/Healthcare.jpg" alt="Card image">
              <div class="container-body">
                <h2 class="container-title">Healthcare</h2>
                    <p class="container-text">The healthcare sector is one of the most important sectors we have in our society. 
                                          It is crucial that patients receive the help that they need. Because of their importance, 
                                          these institutions are often targets for cyberattacks. They can also have bad security habits which can lead to leaking of data. 
                                          There are three main goals the healthcare sector needs to ensure. These consist of integrity, availability and confidentiality. 
                                          There are also a set of local Norwegian laws they need to comply with. This test is made to test this compliance.
                                          Please note that the questions are from “the Norm” which is an established standard for information security within the healthcare sector. 
                                          Only the questions related to information security is included in this version of the test.
                      </p>
                </div>
            </div>
         

         <div class="containers" onclick="location.href='./Pages/financial.php'">
           <img class="container-img" src="./Images/financial.jpg" alt="Card image">
           <div class="container-body">
             <h2 class="container-title">Financial</h2>
                <p class="container-text"> The financial sector is constantly evolving and is a great target for cyberattacks. 
                                      Companies within this sector needs to handle a lot of sensitive data. A great pressure
                                      from international institutions and local governments also leads to a lot of strict regulations. 
                                      Failure to comply can lead to devastating consequences, both from attackers, but also big 
                                      economical fines for not following regulations to a sufficient degree. It can also lead to a great loss in reputation. 
                                      The financial sector needs to pay attention to a lot of regulations. Within EU, GDPR 
                                      is the most important regulation for IT-security. Compliance to this can be tested in the general ISO27001 test on our webpage.
                                      This test is for testing the compliance of the company to the law called “Regulations on the use of information 
                                      and communication technology” which is published by the Norwegian Ministry of Finance. This is the most important law related 
                                      to finance and IT-security.
                  </p>
              </div>
          </div>
  </div>
 
    
    <script>
         // This script will fetch the user name if logged-in
        const Username = "<?php echo $_SESSION['name']; ?>";
        const usernameDisplay = document.getElementById("username-display");
        usernameDisplay.textContent = `${Username}`;
      </script>
</body>
</html>
