<?php 

/**
 * This source used in the code of this file.
 * 
 *  https://www.studentstutorial.com/php/login-logout-with-session
 */

session_start();
$_SESSION["user_id"] = "";  // set the user_id to empty
$_SESSION["name"] = "";    // set the name to empty
$_SESSION["admin"] = "";   // set the admin to empty

session_destroy(); // destroy the session
header("Location: ../index.php");  // redirect the user to the homepage
?>