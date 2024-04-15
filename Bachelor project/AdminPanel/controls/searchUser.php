<!-- Form for user search-->
<div class="searchForm">
  <form method="POST" id="UserModify"> 
  <h2>User List</h2>
<hr>
    <label>Search</label> <br>
    <input type="text" name="UserSearch" placeholder="Username..">
    <input class="btn btn-primary" style="padding: 4px;" type="submit" name="UserSubmit">                  
  </form> 
</div>
             

<?php 
/**
 * This source to create the functions:
 * https://www.php.net/manual/en/pdostatement.bindparam.php
 * https://www.w3schools.com/php/php_mysql_prepared_statements.asp
 * https://www.php.net/manual/en/pdostatement.rowcount.php
 * 
 */

// create a connection to the database                                         
$con = new PDO("mysql:host=192.168.1.25; dbname=usercompanydb",'root', 'passord');

// if the user Submit a data, will search for it, and if not will display all users. 
if (isset($_POST["UserSubmit"])) {
// Bring the data using the name values in the input (if submited)
$userName = $_POST["UserSearch"];

// the query that will be sent to the database (with the values).
// The query will INNER JOIN  company to be abel to display the company name.
$query = $con->prepare(" SELECT `user`.*, company.company_name
FROM `user`
INNER JOIN company ON `user`.company_id LIKE company.company_id
WHERE `user`.name LIKE '%$userName%';");

// Set for the PDO query to return objects 
$query->setFetchMode(PDO::FETCH_OBJ);
// Execute the query
$query->execute();

  // if there is a row 
  if ($query->rowCount() > 0) {
    echo "<table class='table'>
     <tr>
         <th>UserId</th>
        <th>Name</th>
        <th>Email</th>
        <th>Company</th>
         <th>Actions</th>
          </tr>";
      //While there is a row in DB, execute the code below. (DeleteUser($row->user_id) uses when the user click on delete, so its send the user_id)
       while ($row = $query->fetch(PDO::FETCH_OBJ)) {
         echo "<tr>
            <td>{$row->user_id}</td>
             <td>{$row->name}</td>
              <td>{$row->email}</td>
              <td>{$row->company_name}</td>
                  <td>
                  <a class='btn btn-danger btn-sm' onclick=\"DeleteUser($row->user_id)\"><span class='glyphicon glyphicon-trash'></span> Delete</a>
                 </td>
                 </tr>";
                 }

                  echo "</table>";
   } else { // if there is no data to display, display the code below.
    echo "<table class='table'>
    <tr>
        <th>UserId</th>
       <th>Name</th>
       <th>Email</th>
       <th>Company</th>
        <th>Actions</th>
         </tr>";
       echo "
       <th colspan=\"5\" style=\"  text-align: center;\"><p>No results found.</p></th>";
    }
       // close connection
       $con = null;
    }
?>