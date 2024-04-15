/**
 * Used this source to create the functions:
 * 
 * https://www.w3schools.com/js/js_ajax_http.asp
 * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
 * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readystatechange_event
 */



/**
 * This function will bring/load the search form (search bar)
 * for the user in the UserListDiv
 */
function loadSearchUserForm() {
  // first will get the UserListDiv elment by using the class name(.contentList)
  var UserListDiv = document.querySelector('.contentList');
   // create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();
  // The function will be called/run when the readyState changes
  xhr.onreadystatechange = function() {
    // if the request is done
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // and was successful request 
      if (xhr.status === 200) {
        // set the content/text like  the response text
        UserListDiv.innerHTML = xhr.responseText;
      } else { //alert an error messege if not
        alert('There was a problem loading the form.');
      }
    }
  };
  // Open and send a GET request to the searchUser.php 
  xhr.open('GET', './controls/searchUser.php', true);
  xhr.send();
}


/**
 * This function will bring/load the company tabel.
 * 
 * NB: Has the same process as the loadSearchUserForm(), therefore will not comment on it
 */
function loadSearchCompanyForm() {
  var CompanyListDiv = document.querySelector('.contentList');
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        CompanyListDiv.innerHTML = xhr.responseText;
      } else { 
        alert('There was a problem loading the form.');
      }
    }
  };
  xhr.open('GET', './controls/searchCompany.php', true);
  xhr.send();
}


/**
 * This function will bring/load the Company Form
 *  to add a new company to the database.
 * 
 * NB: Has the same process as the loadSearchUserForm(), therefore will not comment on it
 */
function loadCompanyForm() {
  var usersListDiv = document.querySelector('.contentList');
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        usersListDiv.innerHTML = xhr.responseText;
      } else {
        alert('There was a problem loading the form.');
      }
    }
  };
  xhr.open('GET', './controls/addCompany.php', true);
  xhr.send();
}


/**
 * This function will bring/load the User Form
 *  to add a new User to the database.
 * 
 * NB: Has the same process as the loadSearchUserForm(), therefore will not comment on it
 */
function loadUserForm() {
  var usersListDiv = document.querySelector('.contentList');
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        usersListDiv.innerHTML = xhr.responseText;
      } else {
        alert('There was a problem loading the form.');
      }
    }
  };
  xhr.open('GET', './controls/addUser.php', true);
  xhr.send();
}



/**
 * The function will display a confirm message to the user- 
 * if clicks OK it will send the id to the deleteUser.php to delete the user.
 * 
 * @param {int} user_id -User id which will be deleted
 */
function DeleteUser(user_id) {
  if (confirm("Are you sure you want to delete this user?")) {
      // When user click OK, it wil send the id to delete it
      window.location.href = "./controls/deleteUser.php?user_id=" + user_id; 
  }
}

/**
 * The function will display a confirm message to the user- 
 * if clicks OK it will send the id to the deleteCompany.php to delete the company.
 * 
 * @param {int} company_id -User id which will be deleted
 */
function DeleteCompany(company_id) {
  if (confirm("Are you sure you want to delete this company?")) {
      // When user click OK, it wil send the id to delete it
      window.location.href = "./controls/deleteCompany.php?company_id=" + company_id;
  }
}
