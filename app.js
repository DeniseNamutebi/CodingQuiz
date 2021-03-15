//Variables

const data = {
    "id": 1,
    "Question": "What does HTML stand for?",
    "a": "HyperTextMarkup Language",
    "b": "HelloText Markup Langauge",
    "c": "HyperText Money Language"
};



const qnNum = document.getElementById('qn-number');
const qn = document.getElementById('qn');

qnNum.innerHTML = data["id"];
qn.innerHTML = data["Question"]







