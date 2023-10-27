const startButton = $("#startButton")
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
currentQuestionIndex = 0;
score = 0;
startButton.innerHTML = "start";
showQuestion();
}

function showQuestion() {
let currentQuestiion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionEl.innerHTML = questionNo + ". " + currentQuestiion. 
question;
}

const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {text: "script", correct: true},
            {text: "scripting", correct: false},
            {text: "javascript", correct: true},
            {text: "js", correct: true},
        ]
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
        answers: [
            {text: "document.getElementByName('p').innerHTML = 'Hello World!'; ", correct: false},
            {text: "#demo.innerHTML = 'Hello World!';", correct: false},
            {text: "document.getElementById('demo').innerHTML = 'Hello World!';", correct: true},
            {text: "document.getElement('p').innerHTML = 'Hello World!';", correct: false},
        ]
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            {text: "msgBox('Hello World');", correct: false},
            {text: "msg('Hello World');", correct: false},
            {text: "alertBox('Hello World');", correct: false},
            {text: "alert('Hello World');", correct: true},
        ]
    },
    {
        question: "How does a FOR loop start?",
        answers: [
            {text: "for i = 1 to 5", correct: false},
            {text: "for (i <= 5; i++)", correct: false},
            {text: "for (i = 0; i <= 5; i++) ", correct: true},
            {text: "for (i = 0; i <= 5)", correct: false},
        ]
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: [
            {text: "if i == 5 then", correct: false},
            {text: "if (i == 5)", correct: true},
            {text: "if i = 5 then", correct: false},
            {text: "if i = 5", correct: false},
        ]
    },
];

const questionEl = $("#question");
const answerButton = $("#answer-buttons");
const nextButton = $("#next-btn");

let 
