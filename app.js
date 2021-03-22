//Variables
// 'use strict';

const data = [
    {"id": 1,
    "Question": "What does HTML stand for?",
    "options": {
    "a": "HyperTextMarkup Language",
    "b": "HelloText Markup Langauge",
    "c": "HyperText Money Language"}
    }
];

const qnNum = document.getElementById('qn-number');
const qn = document.getElementById('qn');


qnNum.innerHTML = data[0]["id"];
qn.innerHTML = data[0]["Question"]
const optionInput = data[0]["options"]



let optionArray = "";

for(const [key, value] of Object.entries(optionInput)){
     optionArray += `<input type="radio" name="${key}" value="${key}" id="${key}" onclick="selectOnlyThis(this.id)" > ${value} </input>`
 }

document.querySelector("#quizContainer").innerHTML = optionArray;


function selectOnlyThis(id){
    for (let i = 1; i < optionInput.length; i++){
        document.getElementById(i).checked = false;
    }
   document.getElementById(id).checked = true;
}





//Convert html collect to an array
// const optionInput = [].slice.call(document.getElementsByClassName("option"))
