const ChartDescription="The bar chart displays your compliance percentage for each section on the left, while the donut chart on the right shows your overall result.";
const text =" ";
const instructionTextt = "<b>Instruction for using this webpage:</b><br>- To view your answers again, click on the corresponding bar in the chart to display them.<br>- To hide any displayed data, click its name. e.g. Partial-Compliance!";


/*
Our platform offers a valuable feature that allows users to effectively compare and contrast two distinct test results.This functionality proves to be incredibly useful in identifying any modifications or adjustments made since the last test, thus enabling individuals to gain a deeper understanding of their progress over time. By utilizing this tool, users can easily track their development and make informed decisions based on their testing data.
function buttonCreate() {
          const button = document.createElement('button');
          button.innerText = 'Compare';
          button.id = 'CompareButton';

          button.addEventListener('click', () => {
            location.href='./compareResult.php';
          })
          document.body.appendChild(button);
}
*/
function checkFile() {
        let fileInput = document.getElementById('file');
        if (fileInput.files.length === 0) {
          document.getElementById('Results').innerHTML = " ";
          alert('Please choose a file.');
          
        } else {
           document.getElementById('Results').innerHTML = 'Your Questionnaire Results<br><br>';
          document.getElementById('chart-description').innerHTML = ChartDescription;
          document.getElementById('instruction-text').innerHTML = instructionTextt;
          DisplayResults();
          document.getElementById('Compare').innerHTML = text;
      //    buttonCreate();
          document.getElementById('file-reader').style.display = 'none';
          document.getElementById('charts').style.display = 'flex';
        }
  }
  

function DisplayResults() {
    let file = document.getElementById("file").files[0];
    let fileReader = new FileReader();
        fileReader.onload = function() {
            let data = JSON.parse(fileReader.result);
            ResultsChart(data);
          }
      fileReader.readAsText(file);
}


function DisplayResults1(index) {
  let file = document.getElementById("file").files[0];
  let fileReader = new FileReader();
  fileReader.onload = function() {
    let data = JSON.parse(fileReader.result);

    let resultDiv = document.getElementById('userAnswers');
  

    let section = Object.keys(data)[index];
    let questions = data[section];

   // let questionFile = 'legalFinanceQuestions.json';

    let filName=document.getElementById("file").value;
    filName =filName.split("\\").pop();
    let questionFile;

    let bok=filName.charAt(0);
    //console.log(bok + " " + filName);
    //alert(filName);

  
    if(bok === 'H' ){
       questionFile = 'legalHealthQuestions.json';
    }
    
    if(bok === 'F'){
       questionFile = 'legalFinanceQuestions.json';
   }




  
    

    fetch(questionFile)
      .then(response => {
        if (!response.ok) {
          throw new Error('File connection was not ok');
        }
        return response.json();
      })
      .then(questionsData => {
        let sectionTitle = questionsData[index].section;
        let questionsList = questionsData[index].questionsList;

        let sectionDiv = document.createElement('div');
        sectionDiv.classList.add('section');
        let sectionTitleDiv = document.createElement('h2');
        sectionTitleDiv.innerText = sectionTitle;
        sectionDiv.appendChild(sectionTitleDiv);

        let questionsDiv = document.createElement('div');
        questionsDiv.classList.add('questions');
        for (let i = 0; i < questionsList.length; i++) {
          let questionDiv = document.createElement('div');
          questionDiv.classList.add('question');
          let questionTitleDiv = document.createElement('h4');
          questionTitleDiv.innerHTML = questionsList[i].q + '<br>';
          questionDiv.appendChild(questionTitleDiv);

         
          
          let answer = questions[i+1]; 
          let answerDiv = document.createElement('div');
          answerDiv.classList.add('answer');
          if (answer == "0") {
            answerDiv.innerHTML = '<p>No</p>';
          } else if (answer == "0.5") {
            answerDiv.innerHTML = '<p>Partial</p>';
          } else {
            answerDiv.innerHTML = '<p>Yes</p>';
          }
          questionDiv.appendChild(answerDiv);
          questionsDiv.appendChild(questionDiv);
        }

        sectionDiv.appendChild(questionsDiv);
        resultDiv.innerHTML = '';
        resultDiv.appendChild(sectionDiv);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  fileReader.readAsText(file);
}







function ResultsChart(data) {
    var complianceData = [];
    var noncomplianceData = [];
    var partialcomplianceData = [];
    var labels = [];
  
    var totalCompliant = 0;
    var totalNonCompliant = 0;
    var totalpartialCompliant = 0;
  
    var i = 0;
  
    for (var section in data) {
      var sectionData = data[section];
      var numQuestions = Object.keys(sectionData).length;



      var numCompliant=0;
      var partialCompliant = 0;
      var noncompliance= 0;
  
      for (var question in sectionData) {
        if (sectionData[question] == "1") {
          numCompliant++;
        }  else if(sectionData[question] == "0.5"){
          partialCompliant++;
        } else
          noncompliance++;
      }
  
      var compliancePercent = numCompliant / numQuestions;

      var partialcompliancePercent = partialCompliant / numQuestions;

      var noncompliancePercent = noncompliance / numQuestions

  
      complianceData.push(compliancePercent.toFixed(2)* 100);
      noncomplianceData.push(noncompliancePercent.toFixed(2)* 100);
      partialcomplianceData.push(partialcompliancePercent.toFixed(2)* 100)
  
      totalCompliant += numCompliant;
      totalpartialCompliant += partialCompliant;
      totalNonCompliant +=  noncompliance;

  
      labels.push("Section." + (i+1));
      i++;
    }
  
    var totalData = [totalCompliant, totalNonCompliant,totalpartialCompliant];
    var totalColors = ["green","red" ,"orange"];
  
    var ctx = document.getElementById("chart").getContext("2d");
  
    var barChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Compliance",
            data: complianceData,
            backgroundColor: "green",
            stack: "stack",
            datalabels: {          
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
            stack: "stack",
            datalabels: {          
              formatter: function(value) {
                if(value){
                  var percentage = value.toFixed(0) + "%";
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
            stack: "stack",
            datalabels: {          
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
       
      
      plugins: {
        datalabels: {
          display: true,
        }
      },
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
   
      onClick: function(event, chartElements) {
        if (chartElements.length > 0) {
          var index = chartElements[0]._index;
          DisplayResults1(index);
        }
      },
      
  },
    });
   
  
        var totalCtx = document.getElementById("donut-chart").getContext("2d");
      
        var totalChart = new Chart(totalCtx, {
          type: "doughnut",
          data: {
            labels: ["Compliance","Non-Compliance" ,"partial-Compliance"],
            datasets: [
              {
                label: "Total",
                data: totalData,
                backgroundColor: totalColors,
              }
            ]
          },
          options:{
            plugins: {
              datalabels: {
                formatter: (value) => {                  
                  let percentage = value.toFixed(2);
                  return percentage;                    
                },
                color: '#fff',
              }
            },
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
  