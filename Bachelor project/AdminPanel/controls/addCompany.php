<!-- Form for the company adding-->
<form method="POST" class="form-row" action="./controls/addCompany.php">
<h2>Add Company</h2>
<hr>
            <!-- Div for the Company Name-->
            <div class="form-group col-md-5" >
                <!-- label and input for the Name (it's required)-->
                <label for="name">Company Name</label>
                <input type="text" class="form-control" placeholder="NTNU"  name="company_name" required>
            </div>
            <!-- Div for the Company Website-->
            <div class="form-group col-md-5">
                <!-- label and input for the Website (it's required)-->
                <label for="website">Website</label>
                <input type="text" class="form-control" id="inputWebsite4" placeholder="example.com" name="website" required>
            </div>

            <!-- Div for the Submit button-->
            <div class="form-group row">
                <div class="col-sm-10">
                <button type="submit" class="btn btn-primary">Submit</button>
                </div>
  </div>
</form>






<?php
/**
 * This source to create the functions:
 * https://www.php.net/manual/en/pdostatement.bindparam.php
 * https://www.w3schools.com/php/php_mysql_prepared_statements.asp
 */
   // check if the data have been submited
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Bring the data using the name values in the input
    $company_name = $_POST['company_name'];
    $website = $_POST['website'];

    // create a connection to the database 
    $con = new PDO("mysql:host=192.168.1.25; dbname=usercompanydb",'root', 'passord');

    // the query that will be sent to the database (with the values)
    $query = $con->prepare("INSERT INTO company (company_name, website) VALUES (:company_name, :website)");

    // Set the values like the placeholders data (Data provided by the user)
    $query->bindParam(':company_name', $company_name);
    $query->bindParam(':website', $website);

    // Execute the query
    if ($query->execute()) {
        header("Location: ../adminPanel.php"); // if its OK, redirect the user to the adminPanel.php

    } else { // If not, display an error and redirect the user to the adminPanel.php
        echo "<script>if(confirm('Error adding company.'))
           {document.location.href=' ../adminPanel.php'};</script>";
    }

    // close connection
    $con = null;
}
?>











