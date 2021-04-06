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
  }
];
// Variables = Accessing DOM
const qnNum = document.getElementById("qn-number");
const qn = document.getElementById("qn");

qnNum.innerHTML = data[0]["id"];
qn.innerHTML = data[0]["Question"];
const optionInput = data[0]["options"];
//const eachOption = document.querySelectorAll(".option")

let optionArray = "";

/* // Creates HTML elements which are the options to the question 
for (const [key, value] of Object.entries(optionInput)) {
  optionArray += `<div class="option" onclick="correctAnswer(this.id)" id="${key}"><input type="radio" name="option" class="option" value="${key}" > ${value}</input></div> `;
  
}
document.querySelector("#quizContainer").innerHTML = optionArray;

document.addEventListener("click", function (e) {
    //console.log(e.target)
}) */

// Creates HTML elements which are the options to the question 
for (const [key, value] of Object.entries(optionInput)) {
  optionArray += `<button class="option" onClick="correctAnswer(this.id)" id="${key}" value="${key}">
                    <input type="radio" class="radio" name="radio"></input>${value}
                    </button> `;
  
}
document.querySelector("#quizContainer").innerHTML = optionArray;


// Selecting the correct/wrong answer and adding colour
function correctAnswer (id){
     /* document.querySelector(".option").click(function(event){
         event.preventDefault()
         console.log(document.querySelector(".option"));  
          
        } 
    ) */
   
    if (id === data[0]["answer"]){
        document.getElementById(id).style.backgroundColor = "green"
        //console.log(document.getElementById(id))
        
    }
    else{ 
        document.getElementById(id).style.backgroundColor = "red"
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

//document.querySelector(".option").disabled = true
//document.querySelector(".option").disabled = true
}
/* function selectOnlyThis(id) {
  for (let i = 1; i < optionInput.length; i++) {
    document.getElementById(i).checked = false;
  }
  document.getElementById(id).checked = true;
} */

/* function functionCaller (id){
    //selectOnlyThis(id)
 correctAnswer()
} */









//Convert html collect to an array
// const optionInput = [].slice.call(document.getElementsByClassName("option"))
