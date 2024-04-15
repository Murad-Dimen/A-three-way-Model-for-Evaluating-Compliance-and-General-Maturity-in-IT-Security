<?php include("../Authentication/check_session.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Admin Panel</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon"  type="image/x-icon" href="../images/logo.png">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
  <link rel="stylesheet" href="adminPanelStyle.css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="./adminPanel.js"></script>

  
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
          <li class="active"><a href="../Pages/TestingCenter.php">Testing Center</a></li>
          <li><a href="../Pages/about.php">About</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
        <ul class="nav navbar-nav navbar-right">
        <?php
          if(isset($_SESSION['user_id'])) {
                // If admin display admin panel 
                if($_SESSION['admin']) {
                  echo '<li><a href="./adminPanel.php"><span class="glyphicon glyphicon-pencil"></span> Admin Panel</a></li>';
               }
                    // If logged in, display username and Logout button
              echo '<li><a><span style="margin:0; padding: 0;"id="username"></span></a></li>';
              echo '<li><a href="../Authentication/logout.php"><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>';
          } else {
              // If not logged in, display Login button
              echo '<li><a href="../Pages/login-form.html"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>';
          }
          ?>
          ?>        
        </ul>
        
        </ul>
      </div>
    </div>
  </nav>

<!--Div for the admin panel-->
  <div class="adminPanel">
      <h1>Admin Panel</h1>
            <!--Div for the dashboard (the entire box)-->
            <div class="dashboard">
                <!--Div for the controls-->
                <div class="controls"  id="controls"> 
                            </button>                       
                          <h2>Controls</h2>
                          <span>
                                <p>Add a new user </p>
                                <button class="btn btn-primary" name='add_user' onclick="loadUserForm()" type='submit'>Add User</button>
                                <p>Delete user data</p>
                                <button class="btn btn-primary" name='Search_user' onclick="loadSearchUserForm()" type='submit'>Delete User</button>
                          </span>
                          
                          <span>
                                <p>Add a new company</p>
                                <button class="btn btn-primary" name='add_company' onclick="loadCompanyForm()" type='submit'>Add Company</button>
                                <p>Delete Company data</p>
                                <button class="btn btn-primary" name='Search_Company' onclick="loadSearchCompanyForm()" type='submit'>Delete Company</button>
                          </span>                            
                    </div> 
                    <!--Div for the arrowDown (will be displayed only for small screens)-->
                    <div class="arrowDown"></div>

                    <!--Div for the content-->
                    <div class="contentList">
                        <div class="users" id="userSearchForm">
                          <?php include('./controls/searchUser.php'); ?>
                        </div>
                      </div>                
           </div>
      </div>  


        <script> 
        // script will be used in the small media will (slideToggle) for displaying the controls
              $(document).ready(function(){
                $(".arrowDown").click(function(){
                  $(".controls").slideToggle("slow");
                });
              });
        </script>
              
        <script>
           // This script will fetch the user name if logged-in
          const Username = "<?php echo $_SESSION['name']; ?>";
          const usernameDisplay = document.getElementById("username");
          usernameDisplay.textContent = `${Username}`;
      </script>
      
  </body>
</html>