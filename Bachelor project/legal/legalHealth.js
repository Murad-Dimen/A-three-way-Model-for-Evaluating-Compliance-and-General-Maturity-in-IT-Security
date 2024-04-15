// based on the code of QuestionList


/*
fetch('lawsHealthStack.json')
.then( response => {
  if (!response.ok) {
    alert("lest inn");
    throw new Error(`HTTP error: ${response.status}`);
  }
  return response.json();
})
*/

var boxes = [
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & FLK, Section 8",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & FLK, Section 7",
"PJL, Section 15 and 23 & HRL, Section 22",
"PJL, Section 23 & HRL, Section 22 & FLK, Section 7",
"PJL, Sections 22 and 23 & HRL, Sections 21 and 22 & FLK, Section 7",
"PJL, Sections 22 and 23 & HRL, Sections 21 and 22 & FLK, Section 7",
"PJL, Sections 22 and 23 & HRL, Sections 21 and 22 & FLK, Section 7",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"PJL, Section 23 & HRL, Section 22 & FLK, Section 7",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & PJF, Section 13",
"PJL, Sections 15 and19 & HPL, Sections 21 and 25 & GDPR, Article 32(1)(b)",
"PJL, Section 22 & HRL, Section 21",
"PJL, Section 22 & PJF, Section 13 & HFL, Section 7 first paragraph & HPL, Section 25 second paragraph & GDPR, 32(1)(b) ",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"PJL, Section 19",
"PJL, Sections 19 and 22 & HPL, Section 25 & PJF, Section 13 first paragraph (a) & ",
"PJL, Sections 15 and 23 & PJF, Section 13 first paragraph (a), Section 15 & ",
"PJL, Sections 19 and 22 & PJL, Section 13 first paragraph",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"PJL, Section 13",
"PJF, Section 13",
"PJF, Section 13",
"PJL, Section 22 & HRL, Section 21 & FLK, Section 7",
"PJL, Section 19 second paragraph",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"PJF, Section 13 first paragraph (c)",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"PJL, Section 22 & HRL, Section 21 & PJF, Section 13 first paragraph (c)",
"GDPR, Articles 30 and 5 (2) ",
"PJL, Section 13 first paragraph (b)",
"PJL, Section 19 second paragraph",
"PJL, Section 22 & HRL, Section 21",
"PJF, Section 13 second paragraph",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"PJF, Section 13 second paragraph",
"PJL, Section 22 & HRL, Section 21 & PJF, Section 13 second paragraph",
"PJL, Section 22 & HRL, Section 21 & PJF, Section 13 second paragraph",
"PJL, Section 22 & HRL, Section 21 & ",
"PJL, Section 22 & HRL, Section 21 & PJF, Section 13 second paragraph",
"",
"",
"GDPR, Sections 32 and 5 (1)(f) & PJL, Section 22 & HRL, Section 21 & PJF, Section 13 first paragraph (e) and third paragraph",
"PJL, Sections 22 and 23 & HRL, Sections 21 and 22 & PJF, Section 13 first paragraph (e) and third paragraph",
"PJL, Section 23 & HRL, Section 22 & ",
"PJL, Section 23 & HRL, Section 22 & GDPR, Article 33",
"PJL, Section 23 & HRL, Section 22",
"PJL, Section 9 first paragraph (c)",
"PJL, Section 14",
"PJF, Section 14 third paragraph",
"GDPR, Article 34",
"PJL, Section 23 & HRL, Section 22 & GDPR, Article 33",
"PJL, Section 23 & HRL, Section 22 & GDPR, Section 32",
"PJL, Sections 22 and 23 & HRL, Sections 21 and 22 & GDPR, Sections 32 and 5(1)(f)",
"PJL, Section 22 & HRL, Section 21 & GDPR, Section 32",
"PJL, Section 22 & HRL, Section 21 & GDPR, Articles 17 and 32",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Section 32 & PJL, Section 23 & HRL, Section 22",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"HRL, Section 21 & GDPR, Section 32",
"PJL, Section 22 & GDPR, Section 32 & Section 11 of Forskrift om håndtering av medisinsk utstyr (the Medical Devices Regulation)",
"GDPR, Section 32 and 25 & PJL, Section 22 & HRL, Section 21",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & FLK, Sections 7 and 5",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & EFF, Section 17",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & FLK, Section 7",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & FLK, Section 15",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & FLK, Section 17 & EFF, Section 15",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & FLK, Section 7 & EFF, Section 15",
"GDPR, Section 32 and 25 & PJL, Section 22 & HRL, Section 21 & FLK, Section 7 & EFF, Section 15",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"PJL, Section 22 & HRL, Section 21 & GDPR, Article 32",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & FLK, Section 5 and 7 & EFF, Section 15",
"GDPR, Section 28 and 32 & PJL, Section 22 & HRL, Section 21",
"PJL, Section 23 & HRL, Section 22 & FLK, Sections 3 and 7",
"PJL, Section 23 & HRL, Section 22 & GDPR, Articles 32 and 35 & FLK, Sections 6 and 7",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & FLK, Section 7 & EFF, Section 15",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & FLK, Section 7",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & FLK, Sections 7 and 8",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"PJL, Section 22 & HRL, Section 21 & GDPR, Section 32 & PJF, Section 14",
"PJF, Section 14 first paragraph & HPL, Section 45 first paragraph",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & FLK, Section 7",
"PJF, Section 14 third paragraph",
"GDPR, Section 32 & PJL, Section 23 & HRL, Section 22",
"PJL, Section 22 and 14 & HRL, Section 21 & GDPR, Articles 33 and 34",
"GDPR, Section 32 & PJL, Section 23 & HRL, Section 22 & PJF, Section 13",
"GDPR, Articles 5 (1)(f) and 32 & PJL, Section 22 & HRL, Section 21 & PJF, Section 13 and 15",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & PJF, Section 14",
"PJL, Section 25",
"PJL, Section 23 first paragraph & FLK, Section 7",
"PJL, Section 23 first paragraph & FLK, Section 7 & EFF, Section 15",
"PJL, Section 23 first paragraph & GDPR, Article 32 & FLK, Section 7 & EFF, Section 15",
"PJL, Section 23 first paragraph & GDPR, Article 32(1)(d) & FLK, Section 8",
"PJL, Section 23 first paragraph & GDPR, Article 32(1)(d) & FLK, Section 6",
"PJL, Section 23, second paragraph & FLK, Section 5 and 8",
"PJL, Section 22, first paragraph & HRL, Section 21 & GDPR, Article 32(1)(b) and 35 & FLK, Section 6 and 7",
"PJL, Section 22 & HRL, Section 21 & GDPR, Article 32(1)(b) & FLK, Section 7 & EFF, Section 15",
"FLK, Sections 3, 7 and 8",
"",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & EFF, Section 27",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & EFF, 27",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & FLK, Section 7",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & FLK, Section 7 & EFF, Section 15",
"PJL, Section 22 & HRL, Section 21 & GDPR, Article 32(1)(b) and 5 (1)(f)  & FLK, Section 7  & EFF, Section 7 and 15  & ",
"PJL, Section 22 & HRL, Section 21 & GDPR, Article 32(1)(b) & EFF, Sections 7 and 15",
"PJL, Section 22 & HRL, Section 21 & GDPR, Article 32(1)(b) & EFF, Sections 7 and 15",
"PJL, Section 23 first paragraph & HRL, Section 22 & EFF, Sections 7 and 15 & FLK, Section 8",
"PJL, Section 15 & HPL, Section 21 & GDPR, Article 9(2)(i) & EFF, Sections 7 and 15",
"PJL, Section 22 & HRL, Section 21 & GDPR, Article 32(1)(b) & FLK, Sections 6, 7 and 8",
"PJL, Section 22 & HRL, Section 21 & GDPR, Article 32(1)(b) & EFF, Section 15 & FLK, Section 7",
"GDPR, Articles 6 and 9",
"PJL, Section 22 & HRL, Section 21 & GDPR, Section 32 & EFF, Section 3",
"GDPR, Article 25",
"PJL, Section 23 & HRL, Section 22 & EFF, Section 8",
"PJL, Section 22 & HRL, Section 21 & GDPR, Section 32 and 5 (1)(f) & EFF, Section 8",
"GDPR, Article 28 & FLK, Section 7",
"PJL, Section 15 & HPL, Section 21 & GDPR, Article 5(1)(f) and 32",
"GDPR, Article 28",
"GDPR, Article 28",
"GDPR, Articles 28 and 32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Article 28",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Article 28",
"GDPR, Section 28 and 32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Article 28",
"GDPR, Article 28 and 29",
"GDPR, Article 28(3)",
"GDPR, Article 28",
"GDPR, Article 28(2)",
"GDPR, Article 28(4)",
"GDPR, Article 28(4)",
"GDPR, Article 28",
"GDPR, Article 28(3)",
"GDPR, Article 28",
"GDPR, Article 30(2)",
"GDPR, Article 28 and 30",
"GDPR, Section 28 and 32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Article 33(2)",
"GDPR, Section 28 and  32 & PJL, Section 22 & HRL, Section 21",
"GDPR, Article 25 & EFF, Section 15",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & EFF, Section 15",
"PJL, Section 23 & HRL, Section 22 & GDPR, Article 28 & EFF, Section 15",
"PJL, Section 23 & HRL, Section 22 & GDPR, Article 28 & EFF, Section 15",
"PJL, Section 22 & HRL, Section 21 & GDPR, Section 32",
"PJL, Section 22 & HRL, Section 21 & GDPR, Section 32",
"PJL, Section 22 & HRL, Section 21 & GDPR, Section 32 & FLK, Section 7",
"GDPR, Article 32",
"GDPR, Article 45",
"GDPR, Articles 45, 46 and 47",
"GDPR, Article 32",
"PJL, Section 22 & HRL, Section 21 & GDPR, Section 32 and 35 & FLK, Section 6",
"PJL, Section 22 & HRL, Section 21 & GDPR, Section 28 and 32",
"PJL, Section 23 & HRL, Section 22 & GDPR, Article 33",
"PJL, Section 23 & HRL, Section 22 & GDPR, Article 32 ",
"PJL, Section 23 & HRL, Section 22 & GDPR, Article 5(2) and 32 & FLK, Section 7 and 8",
"PJL, Section 23 & HRL, Section 22 & GDPR, Article 33 (5)",
"PJL, Section 23 & HRL, Section 22",
"PJL, Section 23 & HRL, Section 22",
"PJL, Section 23 & HRL, Section 22 & GDPR, Articles 24 and 32",
"GDPR, Articles 32 and 5(1)(f)",
"GDPR, Article 33",
"PJF, Section 14 third paragraph & GDPR, Article 34",
"GDPR, Articles 33 and 34",
"HTIL, Section 6 & HTL, Section 12-3 a",
"PBL, Section 3-1 to 3-6",
"PJL, Section 19 & GDPR, Article 32 (1) (b and c)",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"PJL, Section 19 first paragraph and Section 22 & HRL, Section 21 & GDPR, Section 32",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21",
"PJL, Section 22 & HRL, Section 21 & GDPR, Section 32 & FLK, Section 6",
"PJL, Section 19 first paragraph, and Sections 22 and 23 & HRL, Sections 21 and 22 & FLK, Section 7",
"GDPR, Section 32 & PJL, Section 22 & HRL, Section 21 & FLK, Section 8",
""];







fetch('legalHealthQuestions.json')
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( json => initialize(json) )
  .catch( err => console.error(`Fetch problem: ${err.message}`) );

  function initialize(questions) {

    let userAnswers = {};
    updateDisplay();

 

    function updateDisplay() {
      for( i=0; i<questions.length; i++){
      showQuestion(questions[i]);
    }
  }



  let currentQuestionIndex = 0;
  var teller =0;

    function showQuestion(question) {


      const main = document.querySelector('main');
      main.innerHTML = ''; // clear previous content
      const section = document.createElement('section');
      const heading = document.createElement('h1');
      const para = document.createElement('p');
      const form = document.createElement('form');

      const heading2 = document.createElement('h1');
      heading2.setAttribute("class", "pageNr");

      heading.textContent = question.section;
      para.textContent = question.sectionDescription;

      main.appendChild(section);
      section.appendChild(heading);
      section.appendChild(para);
      section.appendChild(form);
      section.appendChild(heading2);
  

      for (let i = 0; i < question.questionsList.length; i++) {
        teller +=1;
        const questionContainer = document.createElement('div');
        form.appendChild(questionContainer);
        
        if(question.questionsList[i].Tips){
          const tipContainer = document.createElement('p');

          const tipTitle = document.createElement('h1');
          tipTitle.setAttribute("class", "tip-title");
          const tTitle = document.createTextNode(question.questionsList[i].TipsTitle);
          tipTitle.appendChild(tTitle);
          questionContainer.appendChild(tipTitle);

          tipContainer.style.display = 'inline-block';
          tipTitle.style.display = 'inline-block';

          tipContainer.innerText = '?';
          questionContainer.appendChild(tipContainer);
        
          const tipText = document.createElement('p');
          const nr = i;
          const tText = document.createTextNode(question.questionsList[i].Tips);
        
          tipText.style.display = 'none';
          tipText.appendChild(tText);
          questionContainer.appendChild(tipText);

          tipContainer.setAttribute("class", "tip-container");
          tipText.setAttribute("class", "tipText");
        
          tipContainer.addEventListener('mouseover', () => {
            tipText.style.display = 'block';
          });
        
          tipContainer.addEventListener('mouseout', () => {
            tipText.style.display = 'none';
          });
        }

        heading2.textContent = questions.indexOf(question) + 1 +"/"+questions.length;
        const qTitle = document.createElement('h2');
        const qTitleText = document.createTextNode(question.questionsList[i].questionTitle);
        qTitle.appendChild(qTitleText);
        form.appendChild(qTitle);

        const q = document.createElement('p');    
        const qText = document.createTextNode(question.questionsList[i].q);
        q.innerHTML+= teller + ".  ";
        q.appendChild(qText);
        q.innerHTML+= "<br> <b>Relevant laws:</b> " + boxes[i]; 

        form.appendChild(q);
        const radioButtons = createQuestionForm(i);
        form.appendChild(radioButtons);
      }

      

      const submitButton = document.createElement('button');
      submitButton.textContent = 'Submit';
      form.appendChild(submitButton);

      

      let nextQuestionIndex = questions.indexOf(question) + 1;
        if (nextQuestionIndex >= questions.length) {
          nextQuestionIndex = 0;
        }
        
      function createQuestionForm(index) {
          const radioDiv = document.createElement('div');

          const radioYes = document.createElement('input');
          radioYes.setAttribute('type', 'radio');
          radioYes.setAttribute('name', `q${index}`);
          radioYes.setAttribute('value', '1');
          radioDiv.appendChild(radioYes);

          const labelYes = document.createElement('label');
          labelYes.setAttribute('for', `q${index}`);
          const labelTextYes = document.createTextNode('Yes');
          labelYes.appendChild(labelTextYes);
          radioDiv.appendChild(labelYes);
          
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


          return radioDiv;
      }

    

      function createJSONFile(answers, Username) {
          const jsonString = JSON.stringify(answers, null, 2); // add 2-space indentation for readability
          const formattedJsonString = jsonString.replace(/(?:\r\n|\r|\n)/g, '\n'); // add newline after each section
          const blob = new Blob([formattedJsonString], { type: 'application/json' });
        
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `Healthcare_${Username}_${new Date().toLocaleDateString()}.json`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
      }
      

      function submitAnswers(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const questionAnswers = {};
      
          for (let i = 0; i < question.questionsList.length; i++) {
            const answer = formData.get(`q${i}`);
              if (answer) {
                questionAnswers[i+1] = answer;
              } else {
                alert('Please answer all questions before submitting.');
                return;
              }
          }
      
        userAnswers[question.section] = questionAnswers;
      
        currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
              showQuestion(questions[currentQuestionIndex]);
            } else {

              window.location.href = "legalShowResults.php";
              createJSONFile(userAnswers,Username);
            }
      }
          form.addEventListener('submit', submitAnswers);
    
    }

  showQuestion(questions[currentQuestionIndex]);



}