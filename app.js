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

let optionArray = "";

// Creates HTML elements which are the options to the question 
for (const [key, value] of Object.entries(optionInput)) {
  optionArray += `<div class="option" onclick="correctAnswer(this.id)" id="${key}"><input type="radio" name="option" class="option" value="${key}" > ${value}</input></div> `;
  
}
document.querySelector("#quizContainer").innerHTML = optionArray;

document.addEventListener("click", function (e) {
    //console.log(e.target)
})



// Selecting the correct/wrong answer and adding colour
function correctAnswer (id){
     /* document.querySelector(".option").click(function(event){
         event.preventDefault()
         console.log(document.querySelector(".option"));  
         
        } 
    ) */
    if (id === data[0]["answer"]){
        document.getElementById(id).style.color = "green"
        //console.log(document.getElementById(id))
        
    }
    else{ 
        document.getElementById(id).style.color = "red"
        }  
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
