<?php include("../Authentication/check_session.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Results Display</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon"  type="image/x-icon" href="../images/logo.png">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="legal.css">


    
    <link rel="stylesheet" href="displayResultStyleCopy.css">



    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0"></script>
    <script src="legalResults.js"></script>
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
<div class="file-Upload" id="file-reader">
    <h1>Display your results</h1> <br>
    <p>
        Visualize your results with ease using our chart feature, 
        allowing you to quickly identify areas that require improvement to 
        reach compliance
    </p> <br><br>
    <label for="file">Upload File:</label>
    <input type="file" id="file" name="file">
    <button type="button" onclick="checkFile()">Submit</button>
</div>



   <div class="main-content">
          <h1 id="Results"></h1>
          <p id="chart-description"></p>
          <p id="instruction-text" style="text-align: start; justify-content: center;"></p>

            <div class="charts" id="charts"  style="display: none;">
                <canvas class="bar-chart" id="chart" width="940" height="620" style="display: block; height: 660px; width: 420px;"></canvas>
                <canvas class="donut-chart" id="donut-chart" width="940" height="620" style="display: block; height: 660px; width: 420px;"></canvas>
            </div>

            <div class="answers">
                  <div id="questions"></div>
                  <div id="userAnswers" style="font-weight: bold;"></div>
            </div>

            <div class="compare-button">
                <p id="Compare"></p>
            </div>
      </div>

      <script>
        const Username = "<?php echo $_SESSION['name']; ?>";
        const usernameDisplay = document.getElementById("username");
        usernameDisplay.textContent = `${Username}`;
      </script>
  
</body>
</html>