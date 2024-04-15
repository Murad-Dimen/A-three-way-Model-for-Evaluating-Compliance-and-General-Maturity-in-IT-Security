<!-- Form for the User adding-->
<form method="POST" class="form-row" action="./controls/addUser.php">
<h2>Add User</h2>
<hr>
            <!-- Div for the user name-->
            <div class="form-group col-md-5" >
                <!-- label and input for the user name (it's required)-->
                <label for="name">Name:</label>
                <input type="text" class="form-control" placeholder="Name"  name="name" required>
            </div>
             <!-- Div for the user email-->
            <div class="form-group col-md-6">
                <!-- label and input for the user email (it's required)-->
                <label for="email">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" name="email" required>
            </div>

            <!-- Div for the user password-->
            <div class="form-group col-md-5">
                <!-- label and input for the user password (it's required)-->
                <label for="password">Password</label>
                <input type="password" id="inputPassword6" class="form-control mx-sm-3" aria-describedby="passwordHelpInline" 
                       placeholder="Password" name="password" minlength="8" required>
                    <!-- Text to display the password requirement-->
                    <small id="passwordHelpInline" class="text-muted">
                         Must be 8-20+ characters long.
                    </small>
            </div>
            <!-- Div for the user company-->
            <div class="form-group col-md-4">
                <!-- label and select for the Company (it's required)-->
                <label for="inputState">Company</label>
                <select id="inputState" class="form-control" name="company_id" required>
                    <option value="" disabled selected>Choose..</option>

                    <?php    
                    /**
                     * This source to create the functions:
                     * https://www.php.net/manual/en/pdostatement.bindparam.php
                     * https://www.w3schools.com/php/php_mysql_prepared_statements.asp
                     */            

                        // This code will connect to the database and bring all company names that exist in the DB.
                        // create a connection to the database.
                        $con = new PDO("mysql:host=192.168.1.25; dbname=usercompanydb",'root', 'passord');
                        // the query that will be sent to the database.
                        $query = $con->query("SELECT company_id, company_name FROM company");
                        //While there is a row in DB, execute the code below.
                        while ($row = $query->fetch()) {
                            // create a option with the company name, and set the value as company id.
                        echo "<option value='" . $row['company_id'] . "'>" . $row['company_name'] . "</option>";
                        }
                    ?>
                </select>
                </div>

                <!-- Div for the Admin check-->
                <div class="form-group col-md-8">
                <div class="form-check">
                <!-- input can be check, if the user will be an admin-->
                <input class="form-check-input" type="checkbox" id="gridCheck" name="admin">
                <label class="form-check-label" for="gridCheck">
                    Are the user Admin
                </label>
                </div>
            </div>
            <!-- Div for the Admin check-->
            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
	</form>


<?php
// check if the data have been submited
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Bring the data using the name values in the input
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $company_id= $_POST['company_id'];
    $admin = isset($_POST['admin']) ? 1 : 0;

    // create a connection to the database 
    $con = new PDO("mysql:host=192.168.1.25; dbname=usercompanydb",'root', 'passord');

    // the query that will be sent to the database (with the values)
    $query = $con->prepare("INSERT INTO user ( `name`, `email`, `password`, `company_id`, `admin`) 
                                    VALUES ( :name, :email, :password, :company_id, :admin)");

    // Set the values like the placeholders data (Data provided by the user)
    $query->bindParam(':name', $name);
    $query->bindParam(':email', $email);
    $query->bindParam(':password', $password);
    $query->bindParam(':company_id', $company_id);
    $query->bindParam(':admin', $admin);

    // Execute the query
    if ($query->execute()) {
        header("Location: ../adminPanel.php"); // if its OK, redirect the user to the adminPanel.php

    } else {   // If not, display an error and redirect the user to the adminPanel.php
        echo "<script>if(confirm('Error adding User.'))
           {document.location.href=' ../adminPanel.php'};</script>";
    }

    // close connection
    $con = null;
}
?>


