let quizquestion = document.querySelector(".question");
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");
let a_text = document.querySelector("#a_text");
let b_text = document.querySelector("#b_text");
let c_text = document.querySelector("#c_text");
let d_text = document.querySelector("#d_text");
let submit = document.querySelector("#submit");
let previous = document.querySelector("#previous");

const quizData = [
    {
        question: "Which language can run on browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

// console.log(quizData[0].question)
// getData = quizData[0]
datacount = 0
console.log("defalt",datacount)

previous.classList.add("hide_previous");
submit.classList.add("bTn");
submit.classList.remove("previous");
    
quizquestion.innerHTML = quizData[datacount].question;
a_text.innerHTML = quizData[datacount].a;
b_text.innerHTML = quizData[datacount].b;
c_text.innerHTML = quizData[datacount].c;
d_text.innerHTML = quizData[datacount].d;


function nextquiz(){
    datacount++
    if(datacount === 0){
        previous.classList.add("hide_previous");
        submit.classList.add("bTn");
        submit.classList.remove("previous");
    }
    if(datacount === 3){
        submit.innerHTML = "Submit";
    }
    else{
        previous.classList.remove("hide_previous");
        submit.classList.remove("bTn");
        submit.classList.add("previous");
    }
    quizquestion.innerHTML = quizData[datacount].question;
    a_text.innerHTML = quizData[datacount].a;
    b_text.innerHTML = quizData[datacount].b;
    c_text.innerHTML = quizData[datacount].c;
    d_text.innerHTML = quizData[datacount].d;
    
console.log("next",datacount)
}


function previosquiz(){
    datacount--

    if(datacount === 0){
        previous.classList.add("hide_previous");
        submit.classList.add("bTn");
        submit.classList.remove("previous");
    }
    if(datacount === 3){
        submit.innerHTML = "Submit";
    }
    else{
        previous.classList.remove("hide_previous");
        submit.classList.remove("bTn");
        submit.classList.add("previous");
    }
    quizquestion.innerHTML = quizData[datacount].question;
    a_text.innerHTML = quizData[datacount].a;
    b_text.innerHTML = quizData[datacount].b;
    c_text.innerHTML = quizData[datacount].c;
    d_text.innerHTML = quizData[datacount].d;

    
console.log("back",datacount)
}

