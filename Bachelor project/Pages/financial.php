<!DOCTYPE html>
<html>
<head>
    <title>Financial</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon"  type="image/x-icon" href="../images/logo.png">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="style.css">
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
            <img  class="logo-img" src="../Images/logo.png" alt="Card image">
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

     <h1 style="font-weight: bold;   font-family: Arial, Helvetica, sans-serif;">Financial Sector</h1>
      <!--Div for the text-->
      <div class="contents">         
         <p>An effective and robust infrastructure is required to be a well-functioning 
          company within the financial sector. 
          The sector is in continuous development through new digital solutions and regulations. 
          New digital solutions allow more efficiency and conveniency both for the employees 
          and the users and have positive effects for society in general. These digital solutions 
          can also have exploitable vulnerabilities which can lead to devastating consequences. 
         </p>
         <p>
          The Norwegian Financial Supervisory Authority are paying great attention to the digitalization within financial markets. 
          They constantly monitor ICT- sections of financial markets and introduce new regulations. The goal is that every company in 
          finance should have established robust defense mechanisms to achieve a high level of integrity, confidentiality and availability. 
          Integrity because the information that is processed needs to be correct and have mechanisms to prevent it from getting accidentally 
          modified or deleted. It also must not be able to be modified by unauthorized persons. Availability because the information must be
           available wherever it is needed, at any time. Confidentiality because the information needs to be protected by efficient 
           security mechanisms. It must be protected from access by unauthorized persons and stored in a secure manner. 
       </p>
            <p>If a company fails to implement these ICT-related laws it can lead to serious consequences, both economically and for 
              the company’s reputation. It is also important to not only have implemented preventive measures, but also 
              to have set rules after the company has been exposed to an attack or leaking of data.
          </p>
          <p>This test is designed to test compliance with laws related to information security in the financial sector. 
            Please note that the questions included are related to only the information security or data processing sections of
            the applicable laws. The questions are designed for 
            employees that are responsible for IT-security, risk assessment or data processing.
        </p>
        <p>
          Companies are also recommended to perform a general TIBER-NO test. This test is a Norwegian version of TIBER-EU and is 
          developed in collaboration by the Norwegian Financial Supervisory Authority and Norges Bank. This test is great to get a general 
          understanding of how the company would react and perform during an actual cyberattack. 
        </p>
        <p>
          Norway have set frameworks that should be followed by companies in all sectors where IT-security is relevant. 
          The most central ones are ISO27001 and ISO27002. These frameworks should also be followed by companies within finance. 
          They also must follow other laws related to IT-security, processing of data and risk management.  
          The compliance of the company will be tested according to these laws. 
          Please note that the ISO standards and the questions often are very similar and cover the same topics. 
        </p>
          <p>
            Check “yes” if the enterprise is compliant, “no” if not. 
            <br>
            ICT= Information and communications technology
          </p>
  </div>

  <script>
          // This script will fetch the user name if logged-in
        const Username = "<?php echo $_SESSION['name']; ?>";
        const usernameDisplay = document.getElementById("username");
        usernameDisplay.textContent = `${Username}`;
      </script>
</body>
</html>