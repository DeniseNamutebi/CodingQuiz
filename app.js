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
  },
  {
    "id": 3,
    "Question": "Inside which HTML Element do you add your Javascript Code? ",
    "options": {
        "g": "&lt;JS&gt;",
        "h": "&lt;javaScript&gt;",
        "i": "&lt;script&gt;"
    },
    "answer" : "i"
},
{
  "id": 4,
  "Question": "How do you create a function in JavaScript?",
  "options": {
      "j": "function = myFunction()",
      "k": "function myFunction()",
      "l": "function:myFunction()"
  },
  "answer" : "k"
},
{
  "id": 5,
  "Question": "How do you call a function named 'myFunction'",
  "options": {
      "m": "myFunction()",
      "n": "call myFunction()",
      "o": "Function = myFunction()"
  },
  "answer" : "m"
}
];

// Variables = Accessing DOM
const qnNum = document.getElementById("qn-number");
const qn = document.getElementById("qn");
let correctScore =  0;
let incorrectScore = 0;
let state = 0;
let optionInput = data[`${state}`]["options"];
let optionArray = "";




//Changing the Inner HTML of our question and qn Number to current postioning in data
qnNum.innerHTML = data[`${state}`]["id"];
qn.innerHTML = data[`${state}`]["Question"];


function startTimer () {
  let start = performance.now()
  console.log(start)
  // let minutes = Maths.floor(performance.now / 60000);
  // let seconds = ((performance.now % 60000) / 1000 ).toFixed(0);
  // console.log(minutes + ":" + (seconds < 10? "0" : " ") + seconds) ;
} 

// Selecting the correct/wrong answer and adding colour
function correctAnswer (id){
  
  if (id === data[`${state}`]["answer"]){
    document.getElementById(id).style.backgroundColor = "green"
    correctScore ++
    console.log(correctScore)
    
    
  }
  else{ 
    document.getElementById(id).style.backgroundColor = "red"
    incorrectScore ++
  }  
}

function disableBtns (event){
  console.log('hello');
  $(".option").prop('disabled', true);
  $(".radio").prop('disabled', true);
}

function nextQuestion() {
  state ++
    qnNum.innerHTML = data[`${state}`]["id"];
    qn.innerHTML = data[`${state}`]["Question"];
    optionInput = data[`${state}`]["options"];
    optionArray = ""
    for (let [key, value] of Object.entries(optionInput)) {
      optionArray += `<button class="option" onClick="correctAnswer(this.id)" id="${key}" value="${key}">
      <input type="radio" class="radio" name="radio"></input>${value}
      </button> `;
  
  if (state === 4){
      document.getElementById('next-btn').style.display = 'none'
      document.getElementById('finish-btn').style.display = 'block'
        } 
    }
    /* else {
    console.log('error'); }*/
    
    
    document.querySelector("#quizContainer").innerHTML = optionArray;
   

 }



//Disabling buttons when an answer as been selected
document.querySelectorAll(".option").forEach(function(eachElement){
  eachElement.addEventListener("click", disableBtns)
}) 

// Creates HTML elements which are the options to the question 
for (let [key, value] of Object.entries(optionInput)) {
  optionArray += `<button class="option" onClick="correctAnswer(this.id)" id="${key}" value="${key}">
                    <input type="radio" class="radio" name="radio"></input>${value}
                    </button> `;
  
}
document.querySelector("#quizContainer").innerHTML = optionArray;

document.getElementById('qns-right').innerHTML = correctScore

/* function functionCaller (id){
    //selectOnlyThis(id)
 correctAnswer()
} */


