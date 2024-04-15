//Text displays after successful file upload
var ComparisontDescription=" Take a look at the chart below, which highlights the contrast between two sets of test results. The chart specifically focuses on the compliance rate, showcasing the differences between the two sets of data. This information can be valuable for analyzing and comparing performance metrics and identifying areas for improvement.";
const instructionTextt = "<b>Instruction for using this webpage:</b><br>- To view your answers again, click on the corresponding bar in the chart to display them.<br>- To hide any displayed data from a specific file, click its name. e.g. 12-04-2020!";

/**
* This function checks if the files have been uploaded-
* If not will alert a message to the user.
* else will hide the text and display the new text, and run ReadFileData() function 
*/
function checkFile() {
  let fileInput1 = document.getElementById('file1');
  let fileInput2 = document.getElementById('file2');
    if (fileInput1.files.length === 0 || fileInput2.files.length === 0) {
      document.getElementById('Titel').innerHTML = "";
      alert('Please choose files.');
    } else {
      document.getElementById('Titel').innerHTML = 'Comparison results';
      document.getElementById('Comparison-Description').innerHTML = ComparisontDescription;

      document.getElementById('instruction-text').style.display = 'block'; // Display the instructionTextt
      document.getElementById('instruction-text').innerHTML = instructionTextt;

      ReadFileData();

      document.getElementById('content').style.display = 'none'; // Hide the content
    }
}



/*
* This function will read the JSON files data and send it-
* to the CompareData(data1, data2, file1, file2 ) using the parameters.
*/
function ReadFileData() {
            // Calls/retrieves both files that uploaded.
    let file1 = document.getElementById("file1").files[0];
    let file2 = document.getElementById("file2").files[0];
                // Create two new files reader to read  both files data.
    let fileReader1 = new FileReader();
    let fileReader2 = new FileReader();
    
    fileReader1.onload = function() {  // The function will run if the file has been read/loaded
      let data1 = JSON.parse(fileReader1.result);  // parse the data as JSON from file1 and assign to data1 variable.
      fileReader2.onload = function() {
        let data2 = JSON.parse(fileReader2.result);  // parse the data as JSON from file2 and assign to data2 variable.
        CompareData(data1, data2, file1, file2 );    // invoke CompareData() and Send the data-
                                                     // and files to it as parameters.
      }
      fileReader2.readAsText(file2); // Read the files1 Data as a text
    }
    fileReader1.readAsText(file1); // Read the files2 Data  as a text
}


  
/**
 * Compare Data Function Will loop through the data-
 *  in both files and calculate the compliance rate. 
 * 
 * Contains data in files
 * @param {string} data1 
 * @param {string} data2 
 * 
 * Contains information about files
 * @param {objects} file1 
 * @param {objects} file2 
 */
function CompareData(data1, data2, file1, file2 ) {

    // Arrays uses to save the label and display the under the chart
    // labels start from (A.5) "Annex A Controls in ISO"
    let labels = [];    
    var i = 0; // uses for labes
    
    // Two arrays to save the data of each file
    let complianceData1 = []; 
    let complianceData2 = [];
    

    // will loop through the data1 from first file 
    for (let section in data1) {
      labels.push("A." + (i + 5));  // push labesl
      i++;

      let sectionData = data1[section]; // The data1 from specific section

      // Variables used for summing total-nummbers of each compliant-type
      let complianceCount = 0;   
      let partialcomplianceCount = 0;
            // Loop through data sectionData and check each answer type
          for (let answer in sectionData) {
            if (sectionData[answer] === "1") {
              complianceCount++;
            }if (sectionData[answer] === "0.5") {
              partialcomplianceCount++;
            }
          }
       
      // To calculate the compliance we first take the number of compliance answers- 
      // and for partial compliance, we divide the number by two to take the (50%)- 
      // of the answers as compliance.
      let compliance = complianceCount + (partialcomplianceCount / 2);
      // After finding the number we calculate its percentage of it. We take the compliance-
      // value and divide it by the number of answers in that specific section, then multiply-
      // by 100 to remove the (0.??).
      let compliancePercent = (compliance / Object.keys(sectionData).length) * 100;
      // After that, we push the compliancePercent to the array.
      complianceData1.push(compliancePercent.toFixed(2));
    }
     
    /**
     * NB: Here is the same previous process,but for file 2!!
     */
    for (let section in data2) {
      let sectionData = data2[section];
      let complianceCount = 0;
      let partialcomplianceCount = 0;
          for (let answer in sectionData) {
            if (sectionData[answer] === "1") {
              complianceCount++;
            }if (sectionData[answer] === "0.5") {
              partialcomplianceCount++;
            }
          }

      let compliance = (partialcomplianceCount/2) + complianceCount ;
      let compliancePercent = (compliance / Object.keys(sectionData).length) * 100;
      complianceData2.push(compliancePercent.toFixed(2));
    }


  /**
   * This function will read data from JSON files, 
   * first the files that are uploaded by the- 
   * user, and second, the Questions.json which has questions.
   * 
   * And it will display each question with the user's answers for each file.
   * 
   * @param {number} index - The number of the section array/bar chat that is clicked
   */
  function DisplayAnswers(index) {
    // Calls/retrieves both files that uploaded.
    let file1 = document.getElementById("file1").files[0];
    let file2 = document.getElementById("file2").files[0];
    // Create two new files reader to read  both files data.
    let fileReader1 = new FileReader();
    let fileReader2 = new FileReader();
    let data1, data2;
              // The function will run if the file has been read/loaded
    fileReader1.onload = function() {
      data1 = JSON.parse(fileReader1.result);  // parse the data as JSON from file1 and assign to data1 variable.
      DisplayUserAnswers(); // invoke  DisplayUserAnswers() 

    }
          //NB: Here is the same previous process, but for file 2!!
    fileReader2.onload = function() {
      data2 = JSON.parse(fileReader2.result);
      DisplayUserAnswers();
    }

      /**
       * This function will create the elements that are need to display the data
       */
      function DisplayUserAnswers() {
              // If the data are retrieved/fetched
          if (data1 && data2) {
              // select the elements, and assigns them to its resultDiv variable
              let resultDiv1 = document.getElementById('userAnswersContainer1');
              let resultDiv2 = document.getElementById('userAnswersContainer2');
              let section = Object.keys(data1)[index]; // the number of clickde bar/section.

               // Retrieve the answers from the specific section for each file.
              let sectionData1 = data1[section];
              let sectionData2 = data2[section];
               // the path of the Questions.json
              let questionFile = '../questions/Questions.json';

              // Display both container (They are hidden at the start )
              resultDiv1.style.display = 'block';
              resultDiv2.style.display = 'block';
              
                          // Try to fetch Questions.json file
              fetch(questionFile)
                .then(response => {
                  if (!response.ok) {  // If not ok send an error message
                    throw new Error('Failed to load the Questions.json file');
                  }
                  return response.json();
                })
                           //If the fetch was successful
                .then(questionsData => {

                  let sectionTitle = questionsData[index].section; // Set the section title to sectionTitle variable
                  let questionsList = questionsData[index].questionsList; // Set the questions list-
                                                                          // in section to questionsList variable

                  // This is for the first file                                                         
                  // The following lines will create two elements first (Div)- 
                  // and set section as "class", and second a (h2) inside the div. 
                  // Both will be used to display the section Titles.                                               
                  let sectionDiv1 = document.createElement('div');
                  sectionDiv1.classList.add('section');
                  let sectionTitleDiv1 = document.createElement('h2');
                  sectionTitleDiv1.innerText = sectionTitle;
                  sectionDiv1.appendChild(sectionTitleDiv1);

                  // This is for the second file  
                  //NB: Here is the same previous process, but for file 2!!
                  let sectionDiv2 = document.createElement('div');
                  sectionDiv2.classList.add('section');
                  let sectionTitleDiv2 = document.createElement('h2');
                  sectionTitleDiv2.innerText = sectionTitle;
                  sectionDiv2.appendChild(sectionTitleDiv2);
          
                  // Create a div for the questions (all questions)
                  let questionsDiv1 = document.createElement('div');
                  questionsDiv1.classList.add('questions');
                  //NB: Here is the same previous process, but for file 2!!
                  let questionsDiv2 = document.createElement('div');
                  questionsDiv2.classList.add('questions');
                  
                  // Will loop through questions in each section-
                  // and run the code below for each of them.
                  for (let i = 0; i < questionsList.length; i++) {

                        // Create a div element for each question and set a class as "question".
                        // inside the div will create a (h4) to display the quetion
                        let questionDiv1 = document.createElement('div');
                        questionDiv1.classList.add('question');
                        let questionTitleDiv1 = document.createElement('h4');
                        questionTitleDiv1.innerHTML = questionsList[i].q + '<br>';
                        questionDiv1.appendChild(questionTitleDiv1);

                        // answers from the file1
                        // Retrieve the specific answer from the answer list.
                        let answer1 = sectionData1[i+1];

                        // Create a div element for answers and set a class as "answer".
                        // inside the div will create a (p) to display the answer
                        let answerDiv1 = document.createElement('div');
                        answerDiv1.classList.add('answer');

                        // Here will check the answer1, based on the value- 
                        // will display the text 
                        if (answer1 == "0") {
                          answerDiv1.innerHTML = '<p>No</p>';
                        } else if (answer1 == "0.5") {
                          answerDiv1.innerHTML = '<p>Partial</p>';
                        } else {
                          answerDiv1.innerHTML = '<p>Yes</p>';
                        }

                        // Display/Append the questions and answers in Data Container
                        questionDiv1.appendChild(answerDiv1);
                        questionsDiv1.appendChild(questionDiv1);

                        //NB: Here is the same previous process, but for file 2!!
                        let questionDiv2 = document.createElement('div');
                        questionDiv2.classList.add('question');
                        let questionTitleDiv2 = document.createElement('h4');
                        questionTitleDiv2.innerHTML = questionsList[i].q + '<br>';
                        questionDiv2.appendChild(questionTitleDiv2);
              
                        let answer2 = sectionData2[i+1];
                        let answerDiv2 = document.createElement('div');
                        answerDiv2.classList.add('answer');
                        if (answer2 == "0") {
                          answerDiv2.innerHTML = '<p>No</p>';
                        } else if (answer2 == "0.5") {
                          answerDiv2.innerHTML = '<p>Partial</p>';
                        } else {
                          answerDiv2.innerHTML = '<p>Yes</p>';
                        }
                        questionDiv2.appendChild(answerDiv2);
                        questionsDiv2.appendChild(questionDiv2);
                  }

                 // Display/Append data from questionDiv 
                  sectionDiv1.appendChild(questionsDiv1);
                  sectionDiv2.appendChild(questionsDiv2);

                  // Clear the previous data. To restart display a new section
                  resultDiv1.innerHTML = '';
                  resultDiv2.innerHTML = '';
                   // Display/Append new clicked data/bar from questionDiv
                  resultDiv1.appendChild(sectionDiv1);
                  resultDiv2.appendChild(sectionDiv2);
                })
                .catch(error => {
                  console.error('Error:', error); //Display the error message
                });
    
          }
      
        }
        // Read the files Data as a text
    fileReader1.readAsText(file1); 
    fileReader2.readAsText(file2); 
  }





  // the ctx will get he created element in php file that have id "bar-chart"
  let ctx = document.getElementById('chart').getContext('2d');
   // create a new chart
  let chart = new Chart(ctx, {
    type: 'bar',   // set the type of the chart
    data: {
      labels:  labels, // use the labels from the labels array
      datasets: [{              
                  //This will remove the file extension and the username from displaying
        label: file1.name.split('_').slice(1).join('_').split('.')[0],
        backgroundColor: 'rgb(11, 132, 165)',
        data: complianceData1 // use the data from the array
        
      },
          //NB: Here is the same previous process, but for file2!!
        {
        label: file2.name.split('_').slice(1).join('_').split('.')[0],
        backgroundColor: 'rgb(246, 200, 95)',
        data: complianceData2
      }]
    },
    
    options: {
      plugins: {
        datalabels: {
          // uses to show the percentage value on the bar 
          formatter: function(value) {
            var percentage = value+ "%";
            return percentage;
          },
          color: '#000',
          fontStyle: "bold",
          anchor: 'center',
          align: 'center',
        }
      },

      // set some styling and title for the chart 
      title: {
        display: true,
        text: "Comparison Results by Category ",
        fontSize: 16,
        fontColor: "#000",
        fontStyle: "bold"
      },
      legend: {
        position: "bottom",
        labels: {
          position: "bottom",
          fontColor: 'black',
          fontSize: 16,
          fontWeight: 'bold'
        }
      },
      /**
       * This function will run when the user clicks on a specific bar in the chart, 
       * The clicked bar (The bar number) will be sent to the DisplayUserAnswers(index) 
       * as index to display the answers.
       * @param {*} event - to handel the clicking
       * @param {array} chartElements - the array of the chartBars
       */
      onClick: function(event, chartElements) {
        if (chartElements.length > 0) {
          var index = chartElements[0]._index; // to define the bar chart that is been clicked.
          DisplayAnswers(index);  // run the function with the index tha is been clicked.
        }
      },
       // options for display styling 
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            max: 100
          }
        }]
      }
    }
  });

}
  