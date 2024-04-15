
//Text displays after successful file upload
const ChartDescription="The bar chart displays your compliance percentage for each section on the left, while the donut chart on the right shows your overall result.";
const text = "Our platform offers a valuable feature that allows users to effectively compare and contrast two distinct test results.This functionality proves to be incredibly useful in identifying any modifications or adjustments made since the last test, thus enabling individuals to gain a deeper understanding of their progress over time. By utilizing this tool, users can easily track their development and make informed decisions based on their testing data.";
const instructionTextt = "<b>Instruction for using this webpage:</b><br>- To view your answers again, click on the corresponding bar in the chart to display them.<br>- To hide any displayed data, click its name. e.g. Partial-Compliance!";


/*
* This function creates a button at the bottom of the page
* to redirect the user to the Compare page
*/
function buttonCreate() {
      const button = document.createElement('button');
      button.innerText = 'Compare';  //Text displays in the button.
      button.id = 'CompareButton';  // ID that the button element will get

      button.addEventListener('click', () => {  // On click the button will redirect the user- 
         location.href='./compareResult.php';    // to  "./compareResult.php" page
      })

      document.body.appendChild(button);  // Display/appand the button 
}



/* 
* This function checks if the file has been uploaded-
* If not will alert a message to the user.
* else will hide the text and display the new text, and run both ReadFileData() and buttonCreate() functions 
*/ 
function checkFile() {
      let fileInput = document.getElementById('file');
      if (fileInput.files.length === 0) {
        document.getElementById('Results').innerHTML = " ";
        alert('Please choose a file.');   
      } else {
        document.getElementById('Results').innerHTML = 'Your Questionnaire Results<br><br>';
        document.getElementById('chart-description').innerHTML = ChartDescription;
        
        ReadFileData();
        document.getElementById('Compare').innerHTML = text;
        buttonCreate();
        
        document.getElementById('instruction-text').innerHTML = instructionTextt;
        document.getElementById('instruction-text').style.display = 'block'; // Display the instructionTextt
        document.getElementById('file-reader').style.display = 'none';  // Hide the file-reader (at the start)
        document.getElementById('charts').style.display = 'flex';
      }
  }
  



/*
* This function will read the JSON file data and send it-
* to the ResultDisplayChart(data) using the "data" parameter.
*/
function ReadFileData() {
    let file = document.getElementById("file").files[0]; // Calls/retrieves The file that uploaded.
    let fileReader = new FileReader();   // Create a new file reader to read the files data.
        fileReader.onload = function() { // The function will run if the file has been read/loaded
            let data = JSON.parse(fileReader.result); // parse the data as JSON and assign to data variable
            ResultDisplayChart(data);    // Run ResultDisplayChart(data) and pass the data variable
          }
      fileReader.readAsText(file); // and read the data as a text
}




/**
 * This function will read data from JSON files, first uploaded by the- 
 * user, and second, the Questions.json which has questions.
 * And it will display each question with the user's answers
 * 
 * @param {number} index - The number of the section array
 */
function DisplayUserAnswers(index) {
    let file = document.getElementById("file").files[0]; // Calls/retrieves The file that uploaded.
    let fileReader = new FileReader();             // Create a new file reader to read the files data.
    fileReader.onload = function() {  // The function will run if the file has been read/loaded

      let data = JSON.parse(fileReader.result);       // parse the data as JSON and assign to data variable.
      let resultDiv = document.getElementById('userAnswersContainer'); // select he element that will display the quetions and answers. (Entire data).

                                 // retrieve the specific number of the data in the array to the section-variable.
      let section = Object.keys(data)[index];   
      let answers = data[section];        // retrieve the answers from the specific section-
                                          // from the uploaded file.

      let questionFile = '../questions/Questions.json';  // Set the file path into questionFile-variable.

    fetch(questionFile)    // Try to fetch Questions.json file
      .then(response => {
        if (!response.ok) {     // If not ok send an error message
          throw new Error('Failed to load the Questions.json file');
        }
        return response.json(); 
      })
                         //If the fetch was successful
      .then(questionsData => {
        let sectionTitle = questionsData[index].section;        // Set the section title to sectionTitle variable
        let questionsList = questionsData[index].questionsList; // Set the questions list-
                                                                // in section to questionsList variable

        // The following lines will create two elements first (Div)- 
        // and set section as class, and second a (h2) inside the div. 
        // Both will be used to display the section Titles.                                                      
        let sectionDiv = document.createElement('div');
        sectionDiv.classList.add('section');
        let sectionTitleDiv = document.createElement('h2');
        sectionTitleDiv.innerText = sectionTitle;
        sectionDiv.appendChild(sectionTitleDiv);


        // Create a div element for questions and answers 
        //and set a class as "DataContainer".
        let DataContainer = document.createElement('div');
        DataContainer.classList.add('DataContainer');
        
        // Will loop through questions in each section-
        // and run the code below for each of them
        for (let i = 0; i < questionsList.length; i++) {
              // Create a div element for questions and set a class as "question".
              // inside the div will create a (h4) to display the quetions
          let questionDiv = document.createElement('div');
          questionDiv.classList.add('question');
          let questionTextDiv = document.createElement('h4');
          questionTextDiv.innerHTML = questionsList[i].q + '<br>'; // set a new line after quetions.
          questionDiv.appendChild(questionTextDiv);

         
             // Retrieve the specific answer from the answer list.
          let answer = answers[i+1]; 

          // Create a div element for answers and set a class as "answers".
          // inside the div will create a (p) to display the answers
          let answerDiv = document.createElement('div');
          answerDiv.classList.add('answers');
                // Here will check the answer, based on the value- 
                // will display the text 
                if (answer == "0") {
                  answerDiv.innerHTML = '<p>No</p>';
                } else if (answer == "0.5") {
                  answerDiv.innerHTML = '<p>Partial</p>';
                } else {
                  answerDiv.innerHTML = '<p>Yes</p>';
                }
          // Display/Append the questions and answers in Data Container
          DataContainer.appendChild(questionDiv);
          DataContainer.appendChild(answerDiv);
        }
        // Display/Append DataContainer under sectionDiv
        sectionDiv.appendChild(DataContainer);
        resultDiv.innerHTML = ''; // Clear the previous data. To restart display a new section
        resultDiv.appendChild(sectionDiv);
      })

      .catch(error => {
        console.error('Error:', error); //Display the error message
      });
  }
  fileReader.readAsText(file);     // Read the file Data as a text
}








/**
 * The function will display the file data-
 * provided by the user in two different charts (bar, donut)
 * @param {string} data - Data from the file 
 */
function ResultDisplayChart(data) {

    //Arrays uses to save the percentage-values of each answers in each section 
    var complianceData = [];
    var noncomplianceData = [];
    var partialcomplianceData = [];

    // Arrays uses to save the label and display the under the chart
    // labels start from (A.5) "Annex A Controls in ISO"
    var labels = []; 

    // Variables used for summing the total-nummbers of each compliant-type
    var totalCompliant = 0;
    var totalNonCompliant = 0;
    var totalpartialCompliant = 0;

    // Variables used in calculating the total-percentage of each compliant-type
    var totalCompliantPercent = 0;
    var totalPartialCompliantPercent = 0;
    var totalNonCompliantPercent = 0;

    var TotalAnswersNum = 0; // Number of the all Answers

  
    var i = 0; // uses for labes
    
    // Loop through data
    for (var sectionNum in data) {
      var sectionData = data[sectionNum]; // the data from specific section

      var numAnswers = Object.keys(sectionData).length; // Number of the answers in each section
      TotalAnswersNum += Object.keys(sectionData).length; // Summing number of answers in each section

       // Variables used to count the number of each answer type
      var numCompliant= 0;
      var partialCompliant = 0;
      var noncompliance= 0;

            // Loop through data sectionData and check each answer type
            for (var answer in sectionData) {
              if (sectionData[answer] == "1") {
                numCompliant++;
              }  else if(sectionData[answer] == "0.5"){
                partialCompliant++;
              } else
                noncompliance++;
            }


            /**
             * The variables below will be used in bar chart
             */
            // After finding the number of the answers type- 
            // will work on finding the percentage.
            // To find the percentage first will divide- 
            // the number of answer types by the number of Answers in each section.
            var compliancePercent = numCompliant / numAnswers;
            var partialcompliancePercent = partialCompliant / numAnswers;
            var noncompliancePercent = noncompliance / numAnswers;
            
            // Here will push each answer to its array by the section
            // but first will multiply by 100 cause the Percent data
            // will be in a small decimal number e.g.(0.??)
            complianceData.push(compliancePercent.toFixed(2)* 100);
            partialcomplianceData.push(partialcompliancePercent.toFixed(2)* 100);
            noncomplianceData.push(noncompliancePercent.toFixed(2)* 100);
        




            /**
             * The variables below will be used in donut chart
             *
             * NB! This these variables can be added to the forLoop above
             * e.g.  totalCompliant++;
             */
            // To find the total percentage will count the of the answers type. 
            totalCompliant += numCompliant;
            totalpartialCompliant += partialCompliant;
            totalNonCompliant +=  noncompliance;
            // Then it will divide the number of Total answers type by the Total answers number.
            // and multiplay by 100 to remove the (0.) as it shown above. 
            totalCompliantPercent = (totalCompliant / TotalAnswersNum) * 100;
            totalPartialCompliantPercent = (totalpartialCompliant  / TotalAnswersNum) * 100;
            totalNonCompliantPercent = (totalNonCompliant  / TotalAnswersNum) * 100;
           
            // Pushes the number of the labels into the array
            labels.push("A." + (i + 5));
            i++;
    }

 

    // the totalData array contain the total percentage data that will be used in donut chart
    var totalData = [ totalCompliantPercent, totalPartialCompliantPercent,totalNonCompliantPercent];
    // colors arry will be used in donut chart!
    var Colors = ["green","orange" ,"red"];


    // the ctx will get he created element in php file that have id "bar-chart"
    var ctx = document.getElementById("bar-chart").getContext("2d");
  
   // create a new bar chart
    var barChart = new Chart(ctx, {
      type: "bar",               // set the type of the chart
      data: {
        labels: labels,          // use the labels from the labels array
         // data set will get/bring the data from arrays in ResultDisplayChart-function, -
         // and use it to display the data. and use the color- 
         // that are defined for each of them here.
        datasets: [
          {
            label: "Compliance",
            data: complianceData,
            backgroundColor: "green",
            stack: "stack",        // show in stack-form
            datalabels: {      
                  // uses to show the percentage value on the bar    
                formatter: function(value) {
                      if(value){
                        var percentage = value.toFixed(0)+ "%";
                        return percentage;
                      }else
                      return null;
                      
                    },
                    color: '#fff'
                  }
          },

          {
            label: "partial-Compliance",
            data: partialcomplianceData,
            backgroundColor: "orange",
            stack: "stack",     // show in stack-form
            datalabels: {          
                // uses to show the percentage value on the bar 
                formatter: function(value) {
                  if(value){
                    var percentage = value.toFixed(0)+ "%";
                    return percentage;
                  }else
                  return null;
                  
                },
                color: '#fff'
              }
          },
          {
            label: "Non-Compliance",
            data: noncomplianceData,
            backgroundColor: "red",
            stack: "stack", // show in stack-form
            datalabels: {     
                // uses to show the percentage value on the bar      
                formatter: function(value) {
                  if(value){
                    var percentage = value.toFixed(0)+ "%";
                    return percentage;
                  }else
                  return null;
                  
                },
                color: '#fff'
              }
          },
        ],
       },
      // options for display styling 
      options: {
          scales: {
            xAxes: [{
              stacked: true,
            }],
            yAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true,
                max: 100,
              },
            }],
          },
       
        // to show the percentage labels
        plugins: {
          datalabels: {
            display: true,
          }
        },
       // set some styling and title for the chart 
        title: {
          display: true,
          text: "Compliance Results by Category",
          fontSize: 16,
          fontColor: "#000",
          fontStyle: "bold"
        },

        legend: {
          position: "bottom",
          labels: {
            position: "bottom",
            fontColor: 'black',
            fontSize: 13,
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
            DisplayUserAnswers(index);  // run the function with the index tha is been clicked.
          }
        },
      
    },
    });
   


  
    // the totalCtx will get he created element in php file that have id "donut-chart"
    var totalCtx = document.getElementById("donut-chart").getContext("2d");
    // create a new bar chart
    var totalChart = new Chart(totalCtx, {
      type: "doughnut",     // set the type of the chart
      data: {
        labels: ["Compliance","partial-Compliance","Non-Compliance" ], // labes that will displays under the chart
        datasets: [
          {
            data: totalData,         // use the data from totalData array
            backgroundColor: Colors, // use the colors from Colors array
          }
        ]
      },

      options:{
        plugins: {
          datalabels: {
                  // uses to show the percentage value on the bar    
            formatter: (value) => {                  
              let percentage = value.toFixed(2) + "%";
              return percentage;                    
            },
            color: '#fff',
          }
        },
        // set some styling and title for the chart 
        title: {
          display: true,
          text: "Total Compliance Results",
          fontSize: 16,
          fontColor: "#000",
          fontStyle: "bold"
            
          },
          legend: {
            position: "bottom",
            labels: {
              fontColor: 'black',
              fontSize: 13,
              fontWeight: 'bold'
            }
          }

            }
        });

}
  