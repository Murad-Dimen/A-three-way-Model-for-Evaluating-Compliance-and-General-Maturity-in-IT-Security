<!DOCTYPE html>
<html>
<head>
    <title>Healthcare</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon"  type="image/x-icon" href="../images/logo.png">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
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
    <h1 style="font-weight: bold;   font-family: Arial, Helvetica, sans-serif;">Healthcare Sector</h1>
        <!--Div for the text-->
        <div class="contents">         
           <p>There are many requirements that need to be filled for the health-care sector to function properly.
             One of these requirements is that all relevant patient information is shared securely.
              It is crucial that the information is correct and updated, so the patients get the right medications and treatment.
               It is also important that the information is only accessible to the employees that need the information, and that the integrity
                of the system can be trusted by both the patients and the employees. 
           </p>
           <p>This is why keywords like “integrity, availability and confidentiality” summarize the most important points of 
            information security within the health-care sector. Integrity because the information that is processed needs to be correct and 
            have mechanisms to prevent it from getting accidentally modified or deleted. It also must not be able to be modified by 
            unauthorized persons. Availability because the information (personal data) must be available wherever it is needed, at any time. 
            Confidentiality because the information needs to be protected by the proper security mechanisms. 
            It must be protected from access by unauthorized persons and stored in a secure manner.
         </p>
            <p>Privacy is a big focus among health-care providers in Norway. 
              They must comply with the standard GDPR (General Data Protection) rules, but there are also many other national laws related 
              to this sector. This test is designed to test the compliance to these laws. 
              Please note that the questions included are just related to the information security sections of the applicable laws.
              The questions designed specifically for management/leaders, risk managers or data processors are not
              included in this test. This is to save time for the test users of this platform.  
          </p>
          <p>The questions are from “the norm”, which is developed by several organizations within the health sector. 
            It is an established policy with the goal of improving information security and privacy for every organization within healthcare. 
            The test can be modified by the provider if the user wants to include questions 
            that are also designed for employees that are in charge of risk management, processing of health data or management. 
        </p>
          <p>
            Check “yes” or “no” on whether the requirement has been met.
          </p>
        </div>
        <div class="contents" >
        The following acronyms for are used in the table for legal basis: <br>
              -    EFF: eForvaltningsforskriften (eGovernment Regulation)
              <a href="https://lovdata.no/dokument/SF/forskrift/2004-06-25-988"> https://lovdata.no/dokument/SF/forskrift/2004-06-25-988</a> <br>
              -    FEP: Forskrift om etablering og gjennomføring av psykisk helsevern, Section 49 (Regulation on establishment and provision of mental healthcare, Section 49)
              <a href="https://lovdata.no/dokument/SF/forskrift/2011-12-16-1258">https://lovdata.no/dokument/SF/forskrift/2011-12-16-1258</a> <br>
              -    FIKT: Forskrift om IKT-standarder i helse- og omsorgstjenesten (Regulation on ICT standards in the healthcare and care services) 
              <a href="https://lovdata.no/dokument/SF/forskrift/2015-07-01-853">https://lovdata.no/dokument/SF/forskrift/2015-07-01-853</a><br>
              -    FLK: Forskrift om ledelse og kvalitetsforbedring i helse- og omsorgstjenesten (Regulation on management and quality improvement in the healthcare and care services) 
              <a href="https://lovdata.no/dokument/SF/forskrift/2016-10-28-1250">https://lovdata.no/dokument/SF/forskrift/2016-10-28-1250</a>
              <br>
              -    HFL: Helseforskningsloven (Health Research Act) 
              <a href="https://lovdata.no/dokument/NL/lov/2008-06-20-44">https://lovdata.no/dokument/NL/lov/2008-06-20-44</a>
              <br>
              -    HPL: Helsepersonelloven (Health Personnel Act) 
              <a href="https://lovdata.no/dokument/NL/lov/1999-07-02-64">https://lovdata.no/dokument/NL/lov/1999-07-02-64</a> <br>
              -    HTL: Helse- og omsorgstjenesteloven (Health and Care Services Act )
              <a href="https://lovdata.no/dokument/NL/lov/2011-06-24-30">https://lovdata.no/dokument/NL/lov/2011-06-24-30</a>
              <br>
              -    HTIL: Helsetilsynsloven (Health Supervision Act) 
              <a href="https://lovdata.no/dokument/NL/lov/2017-12-15-107">https://lovdata.no/dokument/NL/lov/2017-12-15-107</a> <br>
              -    PBL: Pasient- og brukerrettighetsloven (Patient Rights Act)
              <a href="https://lovdata.no/dokument/NL/lov/1999-07-02-63">https://lovdata.no/dokument/NL/lov/1999-07-02-63</a><br>
              -    PJF: Pasientjournalforskriften (Health Records Regulation)
              <a href="https://lovdata.no/dokument/SF/forskrift/2019-03-01-168">https://lovdata.no/dokument/SF/forskrift/2019-03-01-168</a> <br>
              -    PJL: Pasientjournalloven (Health Records Act) 
              <a href="https://lovdata.no/dokument/NL/lov/2014-06-20-42">https://lovdata.no/dokument/NL/lov/2014-06-20-42</a><br>
              -    POL: Personopplysningsloven (Personal Data Act) <a href="https://lovdata.no/dokument/NL/lov/2018-06-15-38">https://lovdata.no/dokument/NL/lov/2018-06-15-38</a>
              <br>
              -    GDPR: General Data Protection Regulation (GDPR) 
              <a href="https://lovdata.no/dokument/NL/lov/2018-06-15-38">https://lovdata.no/dokument/NL/lov/2018-06-15-38</a>
        </div>

        <script>
          // This script will fetch the user name if logged-in
        const Username = "<?php echo $_SESSION['name']; ?>";
        const usernameDisplay = document.getElementById("username");
        usernameDisplay.textContent = `${Username}`;
      </script>
</body>
</html>