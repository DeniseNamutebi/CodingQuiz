//Variables
'use strict';

const data = [
  {
    "id": 1,
    "Question": "What does HTML stand for?",
    "options": {
      "a": "HyperTextMarkup Language",
      "b": "HelloText Markup Langauge",
      "c": "HyperText Money Language",
    },
    "answer": "a"
  }, 
  {
      "id": 2,
      "Question": "How do you put 'Hello World' on the computer screen in Javascript? ",
      "options": {
          "d": "print ('Hello World')",
          "e": "console.log('Hello World')",
          "f": "write (Hello World)"
      },
      "answer" : "e"
  }
];

// Variables = Accessing DOM
const qnNum = document.getElementById("qn-number");
const qn = document.getElementById("qn");
let correctScore = 0;
let incorrectScore = 0;

let state = 0;


qnNum.innerHTML = data[`${state}`]["id"];
qn.innerHTML = data[`${state}`]["Question"];
let optionInput = data[`${state}`]["options"];

let optionArray = "";


function nextQuestion() {
    if (state <= 4){
        state += 1
        console.log(state)
    }
    qnNum.innerHTML = data[`${state}`]["id"];
    qn.innerHTML = data[`${state}`]["Question"];
    //optionInput = data[`${state}`]["options"];
 }
  

function startTimer () {
    let start = performance.now()
    console.log(start)
    // let minutes = Maths.floor(performance.now / 60000);
    // let seconds = ((performance.now % 60000) / 1000 ).toFixed(0);
    // console.log(minutes + ":" + (seconds < 10? "0" : " ") + seconds) ;
} 



// Creates HTML elements which are the options to the question 
for (const [key, value] of Object.entries(optionInput)) {
  optionArray += `<button class="option" onClick="correctAnswer(this.id)" id="${key}" value="${key}">
                    <input type="radio" class="radio" name="radio"></input>${value}
                    </button> `;
  
}
document.querySelector("#quizContainer").innerHTML = optionArray;


// Selecting the correct/wrong answer and adding colour
function correctAnswer (id){

    if (id === data[`${state}`]["answer"]){
        document.getElementById(id).style.backgroundColor = "green"
        correctScore += 1
        console.log(correctScore)

        
    }
    else{ 
        document.getElementById(id).style.backgroundColor = "red"
        incorrectScore += 1
        }  
}

//Disabling buttons when an answer as been selected
document.querySelectorAll(".option").forEach(function(eachElement){
  eachElement.addEventListener("click", disableBtns)
}) 

function disableBtns (event){
console.log('hello');
$(".option").prop('disabled', true);
$(".radio").prop('disabled', true);
}





/* function functionCaller (id){
    //selectOnlyThis(id)
 correctAnswer()
} */


