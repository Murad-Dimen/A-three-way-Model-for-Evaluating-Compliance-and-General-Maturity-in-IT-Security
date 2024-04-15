/**
 * fetch use to connect to the Questions.json file.
 * and it will use .then to retrieve the alternatives:
 * if it failed (Not OK) to connect it will throw the Error message 
 * else it will return the .json file
 */
fetch('Questions.json')
  .then( response => {
    if (!response.ok) {
      throw new Error('Failed to load the Questions.json file');
    }
    return response.json();
  })
  .then( questions => Questions(questions) )
  .catch( error => console.error('Error:', error) );


/**
 * This function will display the questions/text 
 * in each section in the json file.
 * And it will invoke/run other functions to do other functionalities.
 * 
 * @param {string} questions - data from Questions.json file
 */
function Questions(questions) {

        // use to save the user answers
    let userAnswers = {};
       // loop through the quetion and send it to showQuestion()
    for( i=0; i<questions.length; i++){
      showQuestion(questions[i]);
     }


  // Save the current Question-section number
  let currentQuestionIndex = 0;

    /**
     * This function will display questions, inputs and save user answers. 
     * And it will invoke/run other functions to do other functionalities.
     * 
     * @param {string} questions - data from the current question section
     */
    function showQuestion(question) {
      // select the main from the html, to display the display new elements inside it.
      const main = document.querySelector('main');
      main.innerHTML = ''; // Clear the previous data. To restart display a new section

      // Create new elements, to use it for displaying the data.
      const section = document.createElement('section');   // All data will be displaying inside it.
      const heading = document.createElement('h1');        // To display the title
      const para = document.createElement('p');            // To display the questions
      const form = document.createElement('form');         // To display the questions and inputs inside it
      const headingPageNr = document.createElement('h1');  // To display the page number at the bottom

      // set a class for the headingPageNr
      headingPageNr.setAttribute("class", "pageNr");

      // Define the text the will be displayed as a section title
      heading.textContent = question.section;
 
      // display/append the section and the heading
      main.appendChild(section);
      section.appendChild(heading)

           // if the main section has a description 
          if(question.sectionDescription){
             //Create a h3 element to display (The question mark the can be hover over!)
            const SectionTipsButton = document.createElement('h3'); 
            // Define the style and the text that will be displayed 
            SectionTipsButton.style.display = 'inline-block';
            SectionTipsButton.innerText = '?';
            heading.textContent += '  '; // To add a space 

            // First display the title, and then display the tips next to it.
            section.appendChild(heading).appendChild(SectionTipsButton);
        
            // set class name for the tips text.
            para.setAttribute("class", "tipText");

            // will not be displayed, at the start.
            para.style.display = 'none';
            // this will create a new text node, and put the description in the pText
            const pText = document.createTextNode(question.sectionDescription);
            // append the both the title and the question mark
            para.appendChild(pText);
            section.appendChild(para);
            
            // set a clas name for the SectionTipsButton
            SectionTipsButton.setAttribute("class", "tipButton");
        
            // if hover over the question mark display tips text
            SectionTipsButton.addEventListener('mouseover', () => {
              para.style.display = 'block';
            });
             // if not, will hide it
            SectionTipsButton.addEventListener('mouseout', () => {
              para.style.display = 'none';
            });

          }
    

      // append the form and the page number.
      section.appendChild(form);
      section.appendChild(headingPageNr);

         // loop through the quetions in each sub-section.
        for (let i = 0; i < question.questionsList.length; i++) {
          // create element for the quetions.
          const questionContainer = document.createElement('div');
          // and append it in the form.
          form.appendChild(questionContainer);
               
              // check if the sub-section has a description .
              if(question.questionsList[i].Tips){
                // create to new elements for displaying it.
                const tipButton = document.createElement('h3');
                const tipTitle = document.createElement('h1');
               // This will create a new text node, and put the TipsTitle(sub-section title) in the tTitle.
                const tTitle = document.createTextNode(question.questionsList[i].TipsTitle);
                // and append the tTitle in the tipTitle.
                tipTitle.appendChild(tTitle);
                // and append tipTitle it in the questionContainer.
                questionContainer.appendChild(tipTitle);
                
                // set style for tipButton and tipTitle.
                tipButton.style.display = 'inline-block';
                tipTitle.style.display = 'inline-block';
                
                // tipButton will have a "?" as txt
                tipButton.innerText = '?';
                // will append insde the questionContainer
                questionContainer.appendChild(tipButton);

                // create a ne elementfor the tips text
                const tipText = document.createElement('p');
                // This will create a new text node, and put the Tips (sub-section tips text) in the tText.
                const tText = document.createTextNode(question.questionsList[i].Tips);
                
                // the tipText will not be displayed at the start
                tipText.style.display = 'none';
                // tText will append inside the tipText
                tipText.appendChild(tText);

                // tipText will append insde the questionContainer
                questionContainer.appendChild(tipText);
                
                // set class name for the tipButton,tipText
                tipButton.setAttribute("class", "tipButton");
                tipText.setAttribute("class", "tipText");
                // if hover over the question mark display tips text
                tipButton.addEventListener('mouseover', () => {
                  tipText.style.display = 'block';
                });
                // if not, will hide it
                tipButton.addEventListener('mouseout', () => {
                  tipText.style.display = 'none';
                });

              }
          // The content of the headingPageNr, will be "(the current section number)/Total section number" 
          headingPageNr.textContent = questions.indexOf(question) + 1 +"/"+questions.length;
          
          // Create an element for the question
          const questionPara = document.createElement('p');
          // the text of questionText, will be the question from the questionsList in json file
          const questionText = document.createTextNode(question.questionsList[i].q);
          // append the questionText in questionPara
          questionPara.appendChild(questionText);

          // append the questionPara in form
          form.appendChild(questionPara);
          // for each quetion run the createQuestionForm()
          const radioButtons = createQuestionForm(i);
          // append the radioButtons in form
          form.appendChild(radioButtons);
        }

      
      // create an element for the submit button
      const submitButton = document.createElement('button');
      // the text content will be Submit
      submitButton.textContent = 'Submit';
      // submitButton the radioButtons in form
      form.appendChild(submitButton);

      /**
       * This function will generate labels and an input button for-
       *  each question, which the user can use in their answers.
       * @param {int} index - the number of the current question
       * @returns 
       */
      function createQuestionForm(index) {
          //create an element for containing the inputs and labels
          const radioDiv = document.createElement('div');

          // create an (Yes) input element
          const radioYes = document.createElement('input');
          // set the type as "radio"
          radioYes.setAttribute('type', 'radio');
          // a name as a "q(section-number)
          radioYes.setAttribute('name', `q${index}`);
          // wil have a value of "1"
          radioYes.setAttribute('value', '1');
          // appane radioYes in the radioDiv
          radioDiv.appendChild(radioYes);
 
          // create a new element  for the (Yes) label
          const labelYes = document.createElement('label');
          // set it for value as "q(section-number)
          labelYes.setAttribute('for', `q${index}`);

          // set the value of the Yes labe as "Yes"
          const labelTextYes = document.createTextNode('Yes');

          // appane labelTextYes in the labelYes
          labelYes.appendChild(labelTextYes);
          // appane labelYes in the radioDiv
          radioDiv.appendChild(labelYes);
          

          // Create the input and label for the Partial, have the same process-
          // as the previous one (Yes input and label).
          const radioPartial = document.createElement('input');
          radioPartial.setAttribute('type', 'radio');
          radioPartial.setAttribute('name', `q${index}`);
          radioPartial.setAttribute('value', '0.5');
          radioDiv.appendChild(radioPartial);

          const labelPartial = document.createElement('label');
          labelPartial.setAttribute('for', `q${index}`);
          const labelTextPartial = document.createTextNode('Partial');
          labelPartial.appendChild(labelTextPartial);
          radioDiv.appendChild(labelPartial);

          // Create the input and label for the No, have the same process-
          // as the previous one (Yes input and label).
          const radioNo = document.createElement('input');
          radioNo.setAttribute('type', 'radio');
          radioNo.setAttribute('name', `q${index}`);
          radioNo.setAttribute('value', '0');
          radioDiv.appendChild(radioNo);

          const labelNo = document.createElement('label');
          labelNo.setAttribute('for', `q${index}`);
          const labelTextNo = document.createTextNode('No');
          labelNo.appendChild(labelTextNo);
          radioDiv.appendChild(labelNo);

          
          return radioDiv; // wil return the div
      }

    
      

          /**
           * 
           * @param {*} e 
           * @returns 
           */
          function submitAnswers(e) {
            e.preventDefault(); // prevent from sending empty answers
            // create a new FormData to get the form data and check it.
            const formData = new FormData(form);
            const questionAnswers = {}; // using to saving the user answers
          
              // lopp through the quetions in each section
              for (let i = 0; i < question.questionsList.length; i++) {
                           // get the answers from the form
                const answer = formData.get(`q${i}`);
                  // if there is an answer
                  if (answer) {
                    // set the first object as the answer
                    questionAnswers[i+1] = answer;
                  } else {
                    // else alert the message
                    alert('Please answer all questions before submitting.');
                    return;
                  }
              }
                  // put the userAnsers in each section as a questionAnswers
                  userAnswers[question.section] = questionAnswers;
                  
                  // incremnt the current Question-section number
                  currentQuestionIndex++;
                         // if there is still questions
                      if (currentQuestionIndex < questions.length) {
                        // scroll to the top of the page
                        window.scrollTo(0, 0);
                        // run the showQuestion with current Question-section number
                        showQuestion(questions[currentQuestionIndex]);
                      } else {
                        // if there is no more questions
                        // jump to the displayResult.php page
                        window.location.href = "../Results/displayResult.php";
                        // and run the createJSONFile() function
                        createJSONFile(userAnswers,Username);
                      }
          }
           // when submit clicked will run submitAnswers to check
           form.addEventListener('submit', submitAnswers);

           
          /**
           * This function will create and download a JSON file with the user answers, 
           * the file will get the user name and the date when the user takes the questionnaire
           * @param {object} answers 
           * @param {string} Username 
           * Used this source to create the function, 
           * besides some information for the data, and downloading:
           * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
           * https://heynode.com/tutorial/readwrite-json-files-nodejs/
           * https://developer.mozilla.org/en-US/docs/Web/API/Blob
           * https://www.geeksforgeeks.org/html-dom-createobjecturl-method/
           */
          function createJSONFile(answers, Username) {
            const jsonString = JSON.stringify(answers, null, 2); // add 2-space befor the answers
            const formattedJsonString = jsonString.replace(/(?:\r\n|\r|\n)/g, '\n'); // add newline after each section
                                 //Create a new Blob object that contains the JSON data
            const blob = new Blob([formattedJsonString], { type: 'application/json' });
             // Create a URL for the Blob
            const url = URL.createObjectURL(blob);
            // create a new a element for the link
            const link = document.createElement('a');
            // set the link.href as a url
            link.href = url;
            // set the link.download as username followed with data and .json
            link.download = `${Username}_${new Date().toLocaleDateString()}.json`;
            // append the link in the document.body
            document.body.appendChild(link);
            // will autmaticlay click the link to download
            link.click();
            // will remove the link to not download again
            document.body.removeChild(link);
            // Releases an existing object URL which was-
            // previously created by createObjectURL
            URL.revokeObjectURL(url);
          }
    
    }
  // Run showQuestion() with the current Question-section number.
  showQuestion(questions[currentQuestionIndex]);



}