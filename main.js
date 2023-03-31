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
let quizbody = document.querySelector(".quiz-body");
let btn = document.querySelector(".btn");
let quizheader = document.querySelector(".quiz-header");
let startquizpage = document.querySelector(".resultSpace");



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
    {
        
    },
];


datacount = 0
console.log("defalt",datacount)


let startHome = () =>{
    startquizpage.remove();
}



quizquestion.innerHTML = quizData[datacount].question;
a_text.innerHTML = quizData[datacount].a;
b_text.innerHTML = quizData[datacount].b;
c_text.innerHTML = quizData[datacount].c;
d_text.innerHTML = quizData[datacount].d;

submit.classList.remove("previous");
previous.classList.add("hide_previous");
submit.classList.add("bTn");
        

function reload(){
    location.reload();
}




function nextquiz(){
    datacount++
    if(datacount === 3){
    submit.innerHTML = "Submit";

    }
    if(datacount === 4){
    submit.innerHTML = "Submited";

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
    a.checked = false;
    b.checked = false;
    c.checked = false;
    d.checked = false;

    if (submit.innerHTML === "Submited"){
    quizbody.remove();
    btn.remove();
    quizheader.innerHTML += `<div class="resultSpace">
        <div class=content>
            <div class="wrapper-1">
                <div class="wrapper-2">
                    <h1>Thank you !</h1>
                    <p>Thanks for submiting to our Quiz. </p>
                    <h3>Your Result is:</h3>
                    <p class="confirmR">${result} Out of 20</p>
                    <button class="go-home" onclick="reload()">
                        go home
                    </button>
                </div>
                
            </div>
        </div>`
    }
}
    



let preFunc = () =>{
datacount--
    if(datacount === 0){
        previous.classList.add("hide_previous");
        submit.classList.add("bTn");
        submit.classList.remove("previous");
    }

    submit.innerHTML = "Next";
    quizquestion.innerHTML = quizData[datacount].question;
    a_text.innerHTML = quizData[datacount].a;
    b_text.innerHTML = quizData[datacount].b;
    c_text.innerHTML = quizData[datacount].c;
    d_text.innerHTML = quizData[datacount].d;

    

}

let result = 0;
let quizans = (userans) =>{
    let correctAns = quizData[datacount].correct ;
    
    if (userans === correctAns){
       result = result + 5;
    }
    else{
        console.log("wrong ans");
    }
    console.log(result)
}

