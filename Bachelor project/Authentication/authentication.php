<?php 
/**
 * These sources were used in the code of this file.
 * 
 *  https://stackoverflow.com/questions/39408498/next-page-by-clicking-ok-on-alert-box  
 *  https://phppot.com/php/php-login-script-with-session/
 *  https://www.tutorialspoint.com/php/php_login_example.htm
 */


session_start();    // Starting a new session
    // Establishing the connection! (SEE connection.php FILE)
include('connection.php');  
    //Variables contain data submitted by the user
$email = $_POST['email'];  
$password = $_POST['password'];  

// SQL query that will select everythin from the specific user- 
// (if the user exist in the DB)
$sql = "select * from user where email = '$email' and password = '$password'"; 
$result = mysqli_query($con, $sql);  //Execute the query, ('$con' if connected)
$row = mysqli_fetch_array($result, MYSQLI_ASSOC); // Return the user data  
$count = mysqli_num_rows($result); // Uses to bring the number of rows returned by our query
     //the page that will be redirect to
$url = "../Pages/TestingCenter.php"; 

if($count == 1){  // if there is data/row
    // Set session variables
    $_SESSION["user_id"] = $row['user_id']; // used for the session checking
    $_SESSION["admin"] = $row['admin'];     // used to check if the user is admin
    $_SESSION["name"] = $row["name"];       // used to fetch the user name

    // Redirect to Testing Center.php
    header("Location: $url "); 
}  
else{  //if not alert the massege and keep the user in the same page!
    echo "<script>if(confirm('Login failed. Invalid email or password.'))
           {document.location.href='../Pages/login-form.html'};</script>";
} 
?>

