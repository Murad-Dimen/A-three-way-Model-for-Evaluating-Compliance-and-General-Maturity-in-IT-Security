<!-- Title-->
<h2 class="companyList">Company List</h2>
<hr> 

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
    // the query that will be sent to the database
    $query = $con->prepare("SELECT * FROM `company`");

    // Set for the PDO query to return objects 
    $query->setFetchMode(PDO::FETCH_OBJ);
    // Execute the query
    $query->execute();
    // if there is a row 
    if ($query->rowCount() > 0) {
        echo "
        <table class='table''>
            <tr>
                <th>CompanyId</th>
                <th>Company Name</th>
                <th>Website</th>
                <th>Actions</th>
            </tr>";
         //While there is a row in DB, execute the code below. (DeleteCompany($row->company_id) uses when the user click on delete, so its send the company_id)
        while ($row = $query->fetch(PDO::FETCH_OBJ)) {
            echo "<tr>
                <td>{$row->company_id}</td>
                <td>{$row->company_name}</td>
                <td>{$row->website}</td>
                <td>
                    <a class='btn btn-danger btn-sm' onclick=\"DeleteCompany($row->company_id)\"><span class='glyphicon glyphicon-trash'></span> Delete Company</a>
                </td>
            </tr>";
        }

        echo "</table>";
    } else { // if there is no data to display, display the code below.
        echo "<table class='table'>
            <tr>
                <th>CompanyId</th>
                <th>Company Name</th>
                <th>Website</th>
                <th>Actions</th>
            </tr>
            <tr>
                <th colspan=\"4\" style=\"text-align: center;\"><p>No results found.</p></th>
            </tr>
        </table>";
    }
    
    // close connection
    $con = null;
?>

