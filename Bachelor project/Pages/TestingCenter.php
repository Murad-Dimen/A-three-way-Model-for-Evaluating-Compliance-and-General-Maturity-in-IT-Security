<?php include("../Authentication/check_session.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Testing Center</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon"  type="image/x-icon" href="../images/logo.png">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
  <link rel="stylesheet" href="./TestingCenterStyle.css">
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
              echo '<li><a href="./Pages/login-form.html"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>';
          }
          ?>
        </ul>
      </div>
    </div>
  </nav>

  <!--Div for the description text -->
  <div class="description-text">
      <h1>Testing Center</h1>
      <p>This is where everything happens. The test center is designed to be intuitive and easy to use. Here you can get a general <b>ISO27001</b><br>
        maturity rating or compliance rating for your company. Afterwards you can analyze the results, or compare your results. This can be useful <br>
        to see how compliant the company is after applying improvements. If you need any assistance to perform the tests, contact us through the 
        <a href="../Pages/about.php"><b>About</b></a> page.<br>
      </p>
  </div>

  <!--Div for the page containers -->
  <div class="page-container">
     <div class="grid-containers">

         <!--Div for each container-->
         <div class="containers">
           <div class="container-body">
             <h2 class="container-title">General ISO27001 maturity rating test</h2>
             <p class="container-text"> This questionnaire is based on <b>Annex A</b> of the <b>ISO27001</b> standard and consists of 
                <b>14</b> categories of security controls, each with several control measures presented in the 
                form of questions. ISO27001 is a established and internationally known standard to manage information security. 
                It is also a one of the most used standards in Norway. <br><br>
                The questionnaire includes a total of  <b>114</b> questions, and we kindly request that you respond 
                to each question with one of the available answers. It is essential to answer 
                every question, and leaving any question unanswered is not permitted.
                Once the questionnaire is completed, a  <b>JSON</b> file will be downloaded. The downloaded file 
                can be utilized in subsequent steps of the model.<br>This test will give a rating of the general IT-security maturity 
              </p>
              <button class="btn btn-primary"  onclick="location.href='../questions/questionList.php'">Start Questionnaire</button>
            </div>
         </div>
          <!--Div for each container-->
         <div class="containers">
           <div class="container-body">
             <h2 class="container-title">Display ISO27001 questionnaire results</h2>
             <p class="container-text"> This tool helps organizations assess their compliance level with the <b>ISO27001</b> standard. 
            To get started, simply take our questionnaire, which is presented above. Once completed, 
            you can upload the <b>JSON</b> file and view the results displayed in easy-to-understand graphs. 
            These graphs will provide you with a clear understanding of your organization's compliance 
            level with <b>ISO27001</b>, allowing you to take the necessary steps to improve your organization's
            security posture.
              </p>
              <button class="btn btn-primary"  onclick="location.href='../Results/displayResult.php'">Display</button>
           </div>
        </div>
         <!--Div for each container-->
        <div class="containers">
            <div class="container-body">
              <h2 class="container-title">Compare results from the ISO27001 test</h2>
              <p class="container-text"> This comparison tool enables you to compare the results of the current and previous tests in an interactive graph.
                By analyzing the data side by side, you can quickly identify areas of improvement and see the progress you have made over time.
                </p>
                <button class="btn btn-primary"  onclick="location.href='../Results/compareResult.php'">Compare</button>
            </div>
        </div>
         <!--Div for each container-->
         <div class="containers">
           <div class="container-body">
             <h2 class="container-title">Test compliance to legal regulations</h2>
             <p class="container-text">Questionnaire that tests the compliance rate of the company. For now you can choose between two sectors:<br>
             <b>Healthcare and Finance </b> 
              </p>
              <button class="btn btn-primary"  onclick="location.href='../legal/legal.php'">Start Questionaire Legal regulations</button>
           </div>
     </div>

    <!--Div for each container-->
     <div class="containers">
           <div class="container-body">
             <h2 class="container-title">Display results for legal regulations</h2>
             <p class="container-text">This illustrates the company’s compliance rate in a bar chart and a doughnut chart.
              </p>
              <button class="btn btn-primary" onclick="location.href='../legal/legalShowResults.php'">Show Results Legal regulations</button>
           </div>
     </div>
  </div>

      <script>
        // This script will fetch the user name if logged-in
        const Username = "<?php echo $_SESSION['name']; ?>";
        const usernameDisplay = document.getElementById("username");
        usernameDisplay.textContent = `${Username}`;
      </script>
    
</body>
</html>