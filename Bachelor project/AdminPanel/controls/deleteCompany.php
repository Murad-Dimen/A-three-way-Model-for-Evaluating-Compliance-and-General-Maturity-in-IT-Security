<?php
/**
 * This source to create the functions:
 * https://www.php.net/manual/en/pdostatement.bindparam.php
 * https://www.w3schools.com/php/php_mysql_prepared_statements.asp
 */

// get the company ID, this will be sent when the user will click delete button
$company_id = $_GET['company_id'];

// create a connection to the database                                         
$con = new PDO("mysql:host=192.168.1.25; dbname=usercompanydb",'root', 'passord');

// the query that will be sent to the database (with the value)
$query = $con->prepare("DELETE FROM company WHERE company_id = :company_id");

// Set the value like the one company_id data (Data got when user clicked on delete button)
$query->bindParam(':company_id', $company_id);
// Execute the query
$query->execute();

// close connection
$con = null;

// Redirect the user to the adminPanel.php
header("Location: ../adminPanel.php");
?>
